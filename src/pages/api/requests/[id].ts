import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const id = Number(req.query.id);

        if (!id) {
            res.status(400).json({ error: "No requestId provided" });
        }

        const requests = await prisma.request.findUnique({
            where: { id },
            include: { direction: true, subDirection: true }
        })
    
        if (requests) {
            res.status(201).json(requests)
        } else {
            res.status(500).json({error: "There is no request"})
        }
    } else {
        res.status(405).end();
    }
}