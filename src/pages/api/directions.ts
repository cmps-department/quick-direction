import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next"
import authOptions from "./auth/[...nextauth]"
import Joi from 'joi';

const prisma = new PrismaClient();

const directionSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    professor: Joi.string().required(),
    color: Joi.string().required(),
    subDirections: Joi.array().items(Joi.object({
        name: Joi.string().required(),
        description: Joi.string().optional(),
        examplelink: Joi.string().uri().optional(),
        additionalInfo: Joi.string().optional(),
        downloadFile: Joi.boolean().optional(),
        textField: Joi.boolean().optional(),
    })).required(),
});

interface SubDirection {
    id?: number;
    name: string;
    description?: string;
    examplelink?: string;
    additionalInfo?: string;
    downloadFile?: string;
    textField?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions)
    if (session) {
        if (req.method === "POST") {
            try {
                const validationResult = directionSchema.validate(req.body);
                if (validationResult.error) {
                    return res.status(400).json({ error: validationResult.error.details[0].message });
                }
                const { name, description, professor, color, subDirections } = validationResult.value;

                const newDirection = await prisma.directions.create({
                    data: {
                        name,
                        description,
                        professor,
                        color,
                        subDirections: {
                            create: subDirections.map((subDir: SubDirection) => ({
                                ...subDir,
                            })),
                        },
                    },
                    include: {
                        subDirections: true,
                    },
                });

                res.status(201).json(newDirection);
            } catch (error) {
                res.status(500).json({ error: error });
            }
        } else if (req.method === "GET") {
            const filter = req.query.filter;

            let prismaPayload: any = {
                include: { subDirections: true },
            };

            if (filter === "asc") {
                prismaPayload = {
                    include: { subDirections: true },
                    orderBy: {
                        name: "asc",
                    },
                };
            } else if (filter === "desc") {
                prismaPayload = {
                    include: { subDirections: true },
                    orderBy: {
                        name: "desc",
                    },
                };
            } else if (filter === "date") {
                prismaPayload = {
                    include: { subDirections: true },
                    orderBy: {
                        createdAt: "asc",
                    },
                };
            }

            const allDirections = await prisma.directions.findMany(prismaPayload);

            if (allDirections) {
                res.status(201).json(allDirections);
            } else {
                res.status(500).json({ error: "There is no directions" });
            }
        } else if (req.method === "DELETE") {
            const id = Number(req.query.id);

            if (isNaN(id)) {
                res.status(400).json({ error: "Invalid ID format" });
                return;
            }

            const allDirections = await prisma.directions.delete({
                where: {
                    id: id,
                },
            });

            if (allDirections) {
                res.status(201).json({ message: "Succesfuly deleted" });
            } else {
                res.status(500).json({ message: "There is no directions" });
            }
        } else if (req.method === "PUT") {
            try {
                const validationResult = directionSchema.validate(req.body);
                if (validationResult.error) {
                    return res.status(400).json({ error: validationResult.error.details[0].message });
                }
                const { id, name, description, professor, color, subDirections } = validationResult.value;

                if (isNaN(id)) {
                    res.status(400).json({ error: "Invalid ID format" });
                    return;
                }

                const updatedDirections = await prisma.directions.update({
                    where: {
                        id: parseInt(id),
                    },
                    data: {
                        name,
                        description,
                        professor,
                        color,
                        subDirections: {
                            create: subDirections
                                .filter((subDir: SubDirection) => !subDir.id)
                                .map((subDir: SubDirection) => ({
                                    name: subDir.name,
                                    description: subDir.description,
                                    examplelink: subDir.examplelink,
                                    additionalInfo: subDir.additionalInfo,
                                    downloadFile: subDir.downloadFile,
                                    textField: subDir.textField,
                                })),
                            update: subDirections
                                .filter((subDir: SubDirection) => subDir.id)
                                .map((subDir: SubDirection) => ({
                                    where: { id: subDir.id },
                                    data: {
                                        name: subDir.name,
                                        description: subDir.description,
                                        examplelink: subDir.examplelink,
                                        additionalInfo: subDir.additionalInfo,
                                        downloadFile: subDir.downloadFile,
                                        textField: subDir.textField,
                                    },
                                })),
                            deleteMany: {
                                name: {
                                    notIn: subDirections.map((subDir: SubDirection) => subDir.name),
                                },
                            },
                        },
                    },
                    include: {
                        subDirections: true,
                    },
                });

                if (updatedDirections) {
                    res.status(201).json(updatedDirections);
                } else {
                    res.status(500).json({ error: "There is no directions" });
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            res.status(405).end(); // Method Not Allowed
        }
    } else {
        res.status(405).json({error: "User is not authorized"})
    }
}
