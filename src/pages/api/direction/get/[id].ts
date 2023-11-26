import { PrismaClient } from '../../../../../prisma/generated/client'
import type { NextApiRequest, NextApiResponse } from 'next'


const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const id = Number(req.query.id);

        if (isNaN(id)) {
            res.status(400).json({ error: 'Invalid ID format' });
        }

        try {
            const oneDirection = await prisma.directions.findUnique({
                where: { id },
                include: { subDirections: true }
            });

            if (oneDirection) {
                res.status(201).json(oneDirection);
            } else {
                res.status(500).json({ message: 'Category not found' });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "An error occurred while creating the direction." });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
