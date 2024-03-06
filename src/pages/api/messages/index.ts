import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { requestId, userId, userName, userSurname, text, documentLinks } = req.body;

      const newMessage = await prisma.message.create({
        data: {
          requestId,
          userId,
          userName,
          userSurname,
          text,
          documentLinks,
        },
      });

      res.status(201).json(newMessage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the message.' });
    }
  } else {
    res.status(405).end();
  }
}
