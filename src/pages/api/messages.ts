import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient();
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
          const { requestId, senderId, text, documentLink } = req.body;
    
          const newMessage = await prisma.message.create({
            data: {
                requestId,
                senderId,
                text,
                documentLink

            },
          });

    
          res.status(201).json(newMessage);

        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "An error occurred while creating the message." });
        }
      } else if (req.method === "GET") {
        const id = Number(req.query.id)

        const oneMessage = await prisma.message.findUnique({
            where: {
                id: id,
            },
          })
             if (oneMessage) {
            res.status(201).json(oneMessage)
          } else {
               res.status(500).json({error: "There is no message"})
          }
      } else {
        res.status(405).end();
      }
}