import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient();
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const id = Number(req.query.id)

        const messages = await prisma.message.findMany({
                where: {
                    requestId: id,
                },
            })
        if (messages) {
            res.status(201).json(messages)
        } else {
            res.status(500).json({error: "There is no message"})
        }
    } else {
        res.status(405).end();
    }
}