import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const directionId = parseInt(req.query.id as string);

  if (req.method === 'GET') {
    try {
      const request = await prisma.request.findMany({
        where: { directionId: directionId }
      });

      if (request.length === 0) {
        return res.status(404).json({ message: 'Request not found' });
      }

      res.status(200).json(request);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}