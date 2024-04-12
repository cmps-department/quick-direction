import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth/next";
import { authConfig } from "@/configs/auth";
import Joi from "joi";
import roles from "@/constants/roles";

const requestValidationSchema = Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    email: Joi.string().email().required(),
    studentGroup: Joi.string().required(),
    userId: Joi.string().required(),
    text: Joi.string().allow("").optional(),
    status: Joi.string().valid("Submitted", "Processing", "Clarify", "Clarified", "Processed", "Canceled").required(),
    documentLink: Joi.string().allow("").optional(),
    directionId: Joi.number().integer().required(),
    subDirectionId: Joi.number().integer().required(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authConfig);
    if (session) {
        if (req.method === "POST") {
            if (session?.roles.includes(roles.ROLE_STUDENT)) {
                try {
                    const { error, value } = requestValidationSchema.validate(req.body);

                    if (error) {
                        return res.status(400).json({ error: error.details[0].message });
                    }

                    const { name, surname, email, studentGroup, userId, text, status, directionId, subDirectionId, documentLink } = value;
                    const newRequest = await prisma.request.create({
                        data: {
                            name,
                            surname,
                            email,
                            studentGroup,
                            userId,
                            text,
                            status,
                            documentLink,
                            directionId,
                            subDirectionId,
                            messages:
                                text || documentLink
                                    ? {
                                          create: {
                                              userId,
                                              userName: name,
                                              userSurname: surname,
                                              text,
                                              documentLinks: documentLink ? [documentLink] : [],
                                          },
                                      }
                                    : undefined,
                        },
                        include: {
                            messages: true,
                        },
                    });

                    res.status(201).json(newRequest);
                } catch (error) {
                    console.error(error);
                    res.status(500).json({ error: error });
                }
            } else {
                res.status(405).json({ error: "Only students can create request" });
            }
        } else if (req.method === "GET") {
            if (session?.roles.includes(roles.ROLE_SUPPORT_ADMIN)) {
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
            } else if (session?.roles.includes(roles.ROLE_STUDENT)) {
                const allRequests = await prisma.request.findMany({
                    where: {
                        userId: session?.user.userId,
                    },
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
            } else if (session?.roles.includes(roles.ROLE_TEACHER)) {
                const allRequests = await prisma.request.findMany({
                    where: {
                        direction: {
                            professor: session.user.email,
                        },
                    },
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
            }
        } else {
            res.status(405).end();
        }
    } else {
        res.status(405).json({ error: "User is not authorized" });
    }
}
