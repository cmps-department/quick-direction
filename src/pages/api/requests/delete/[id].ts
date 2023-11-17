import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestId = parseInt(req.query.id as string);

  if (req.method === 'DELETE') {
    try {
      await prisma.request.delete({
        where: { id: requestId },
      });

      res.status(204).json({ message: 'Succesfully deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}