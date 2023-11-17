import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestId = parseInt(req.query.id as string);

  if (req.method === 'PUT') {
    try {
      const { name, surname, email, text, directionId } = req.body;

      const updatedRequest = await prisma.request.update({
        where: { id: requestId },
        data: {
          name,
          surname,
          email,
          text,
          directionId,
        },
      });

      res.status(200).json(updatedRequest);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}