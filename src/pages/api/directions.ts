import { PrismaClient } from '../../../prisma/generated/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { name, description, professor, color, subDirections } = req.body;

      const newDirection = await prisma.directions.create({
        data: {
          name,
          description,
          professor,
          color,
          subDirections: {
            create: subDirections.map((subDir:any) => ({
              ...subDir,
            })),
          }
        },
        include: {
          subDirections: true
        }
      });

      res.status(201).json(newDirection);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while creating the direction." });
    }
  } else if (req.method === "GET") {
    const allDirections = await prisma.directions.findMany({
      include: { subDirections: true }
    })

    if (allDirections) {
      res.status(201).json(allDirections)
    } else {

      res.status(500).json({ error: "There is no directions" })
    }
  } else if (req.method === "DELETE") {
    const id = Number(req.query.id)

    if (isNaN(id)) {
      res.status(400).json({ error: "Invalid ID format" });
      return;
    }

    const allDirections = await prisma.directions.delete({
      where: {
        id: id,
      }
    })

    if (allDirections) {
      res.status(201).json({ message: "Succesfuly deleted" })
    } else {
      res.status(500).json({ message: "There is no directions" })
    }
  } else if (req.method === "PUT") {
    const { id, name, description, professor, color, subDirections } = req.body;

    if (isNaN(id)) {
      res.status(400).json({ error: "Invalid ID format" });
      return;
    }
    try {
      const updatedDirections = await prisma.directions.update({
        where: {
          id: parseInt(id),
        },
        data: {
          name,
          description,
          professor,
          color,
          subDirections: {
            upsert: subDirections.map((subDir: any) => ({
              where: { id: parseInt(subDir.id)},
              create: { ...subDir },
              update: { ...subDir },
            })),
            deleteMany: { 
              id: { notIn: subDirections.map((subDir: any) => parseInt(subDir.id)) },
            },
          }
        },
        include: {
          subDirections: true
        }
      });

      if (updatedDirections) {
        res.status(201).json(updatedDirections)
      } else {

        res.status(500).json({ error: "There is no directions" })
      }
    } catch (error) {
      console.log(error);
    }

  } else {
    res.status(405).end(); // Method Not Allowed
  }
}