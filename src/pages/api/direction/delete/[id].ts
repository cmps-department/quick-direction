import { PrismaClient } from '../../../../../prisma/generated/client'
import type { NextApiRequest, NextApiResponse } from 'next'


const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const id = Number(req.query.id);

    if (isNaN(id)) {
      res.status(400).json({ error: 'Invalid ID format' });
      return;
    }

    const deletedDirection = await prisma.directions.delete({
      where: {
        id: id,
      },
    });

    if (deletedDirection) {
      res.status(201).json({ message: 'Successfully deleted' });
    } else {
      res.status(500).json({ message: 'Category not found or not deleted' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
