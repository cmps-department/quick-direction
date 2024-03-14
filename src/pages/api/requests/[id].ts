import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth/next"
import authOptions from "../auth/[...nextauth]"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions)
    if (session) {
        if (req.method === "GET") {
            const id = Number(req.query.id);

            if (!id) {
                res.status(400).json({ error: "No requestId provided" });
            }

            const requests = await prisma.request.findUnique({
                where: { id },
                include: { direction: true, subDirection: true },
            });

            if (requests) {
                res.status(201).json(requests);
            } else {
                res.status(500).json({ error: "There is no request" });
            }
        } else {
            res.status(405).end();
        }
    } else {
        res.status(405).json({error: "User is not authorized"})
    }
}
