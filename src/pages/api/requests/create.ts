import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, surname, email, text, directionId } = req.body;

      const newRequest = await prisma.request.create({
        data: {
          name,
          surname,
          email,
          text,
          directionId,
        },
      });

      res.status(201).json(newRequest);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}