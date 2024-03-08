import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "PUT") {
        const id = Number(req.query.id);
        const { name, description, professor, color, subDirections } = req.body;

        if (isNaN(id)) {
            res.status(400).json({ error: "Invalid ID format" });
            return;
        }

        try {
            const updatedDirections = await prisma.directions.update({
                where: {
                    id,
                },
                data: {
                    name,
                    description,
                    professor,
                    color,
                    subDirections: {
                        create: subDirections
                            .filter((subDir: any) => !subDir.id)
                            .map((subDir: any) => ({
                                name: subDir.name,
                                description: subDir.description,
                                examplelink: subDir.examplelink,
                                additionalInfo: subDir.additionalInfo,
                                downloadFile: subDir.downloadFile,
                                textField: subDir.textField,
                            })),
                        update: subDirections
                            .filter((subDir: any) => subDir.id)
                            .map((subDir: any) => ({
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
                                notIn: subDirections.map((subDir: any) => subDir.name),
                            },
                        },
                    },
                },
                include: {
                    subDirections: true,
                },
            });

            if (updatedDirections) {
                return res.status(201).json(updatedDirections);
            } else {
                return res.status(500).json({ error: "There is no directions" });
            }
        } catch (error) {
            console.log(error);
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
