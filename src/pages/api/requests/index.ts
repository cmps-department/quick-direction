import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth/next"
import authOptions from "../auth/[...nextauth]"
import Joi from "joi"

const requestValidationSchema = Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    email: Joi.string().email().required(),
    studentGroup: Joi.string().required(),
    userId: Joi.string().required(),
    text: Joi.string().required(),
    status: Joi.string().valid('Submitted', 'Processing', 'Clarify', 'Clarified', 'Processed', 'Canceled').required(),
    documentLink: Joi.string().required(),
    directionId: Joi.number().integer().required(),
    subDirectionId: Joi.number().integer().required(),
});

const patchRequestValidationSchema = Joi.object({
    id: Joi.number().integer().required(),
    status: Joi.string().valid('Submitted', 'Processing', 'Clarify', 'Clarified', 'Processed', 'Canceled').required(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions)
    if (session) {
        if (req.method === "POST") {
            try {
                const { error, value } = requestValidationSchema.validate(req.body);

                if (error) {
                    return res.status(400).json({ error: error.details[0].message });
                }

                const newRequest = await prisma.request.create({
                    data: value
                });

                res.status(201).json(newRequest);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: error });
            }
        } else if (req.method === "GET") {
            const id = Number(req.query.id);

            if (!id) {
                const allRequests = await prisma.request.findMany({
                    include: {
                        direction: true,
                        subDirection: true,
                        messages: true,
                    },
                });

                if (allRequests) {
                    res.status(201).json(allRequests);
                } else {
                    res.status(500).json({ error: "There is no request" });
                }
            } else {
                const requests = await prisma.request.findUnique({
                    where: {
                        id: id,
                    },
                });

                if (requests) {
                    res.status(201).json(requests);
                } else {
                    res.status(500).json({ error: "There is no request" });
                }
            }
        } else if (req.method === "DELETE") {
            const id = Number(req.query.id);

            if (isNaN(id)) {
                res.status(400).json({ error: "Invalid ID format" });
                return;
            }

            const request = await prisma.request.delete({
                where: {
                    id: id,
                },
            });

            if (request) {
                res.status(201).json({ message: "Succesfuly deleted" });
            } else {
                res.status(500).json({ message: "There is no directions" });
            }
        } else if (req.method === "PATCH") {
            const { error, value } = patchRequestValidationSchema.validate(req.body);

            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }

            const { id, status } = value;

            if (Array.isArray(id)) {
                res.status(400).json({ error: "Multiple IDs are not supported" });
                return;
            }

            if (isNaN(id)) {
                res.status(400).json({ error: "Invalid ID format" });
                return;
            }
            try {
                const updatedRequest = await prisma.request.update({
                    where: { id },
                    data: { status },
                });

                if (updatedRequest) {
                    res.status(201).json(updatedRequest);
                } else {
                    res.status(500).json({ error: "There is no directions" });
                }
            } catch (error) {
                console.log(error);
                res.status(500).json({ error: error });
            }
        } else {
            res.status(405).end();
        }
    } else {
        res.status(405).json({error: "User is not authorized"})
    }
}
