import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { question, answer, questionType, documentLink } = req.body;

      if (!question || !answer || !questionType) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const createdFaq = await prisma.faq.create({
        data: {
          question,
          answer,
          questionType,
          documentLink,
        },
      });

      res.status(201).json(createdFaq);
    } catch (error) {
      console.error('Error creating faq:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'GET') {
    try {
      const allFaq = await prisma.faq.findMany();

      if (allFaq.length > 0) {
        res.status(200).json(allFaq);
      } else {
        res.status(404).json({ error: 'There are no faq entries' });
      }
    } catch (error) {
      console.error('Error fetching faq:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).end();
  }
}
