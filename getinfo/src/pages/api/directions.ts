import { PrismaClient } from '../../../prisma/generated/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient();
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
          const { name, description, professors, examplelink, additionallink } = req.body;
    
          const newDirection = await prisma.directions.create({
            data: {
                name,
                description, 
                professors, 
                examplelink, 
                additionallink 
            },
          });
    
          res.status(201).json(newDirection);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "An error occurred while creating the direction." });
        }
      }else if(req.method === "GET"){
        const allDirections = await prisma.directions.findMany()
        if(allDirections){
          res.status(201).json(allDirections)
        }else{
          res.status(500).json({errro: "There is no directions"})
        }
      }else {
        res.status(405).end(); // Method Not Allowed
      }
}