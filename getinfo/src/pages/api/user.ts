import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../utils/prisma/prisma'
  
  export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    try {
      switch (req.method) {
        case 'GET': {
            const users = await prisma.user.findMany()
            return res.json(users)
        }
        case 'POST': {
          const { email, name } = req.body
          const user = await prisma.user.create({
            data: {
                name,
                email
            },
        })
          return res.json(user)
        }
        case 'PUT': {
          const { id, ...updateData } = req.body
          const user = await prisma.user.update(
            { where: {id},
                data: {
                    ...updateData
                }
            })
          return res.json(user)
        }
        case 'DELETE': {
          const { id } = req.body
          await prisma.user.delete({
                where: { id }
            })
          res.status(200).json({message: "User has been deleted"})
        }
        default:
          break
      }
    } catch (error) {
      return res.status(500).json({message: "error" })
    }
  }