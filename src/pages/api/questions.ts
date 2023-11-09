import { PrismaClient } from '../../../prisma/generated/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient();
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
          const { name, surname, email, text, status, directions} = req.body;
    
          const newQuestion = await prisma.questions.create({
            data: {
                name,
                surname, 
                email,
                text,
                status,
                directions
            },
          });

    
          res.status(201).json(newQuestion);

        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "An error occurred while creating the question." });
        }
      }else if(req.method === "GET"){
        const id = Number(req.query.id)

        if(!id){
            const allQuestions = await prisma.questions.findMany({
                include: {document: true}
              })
      
              if(allQuestions){
                res.status(201).json(allQuestions)
              }else{
      
                res.status(500).json({error: "There is no questions"})
              }
        }else{
            const allQuestions = await prisma.questions.findUnique({
                where: {
                    id: id,
                },
              })
      
              if(allQuestions){
                res.status(201).json(allQuestions)
              }else{
      
                res.status(500).json({error: "There is no questions"})
              }
        }  
      }else if(req.method === "DELETE"){
        const id = Number(req.query.id)

        if (isNaN(id)) {
          res.status(400).json({ error: "Invalid ID format" });
          return;
        }

        const question = await prisma.questions.delete({
          where:{
            id: id,
          }
        })

        if(question){
          res.status(201).json({message: "Succesfuly deleted"})
        }else{
          res.status(500).json({message: "There is no directions"})
        }
      }else if(req.method === "PUT"){
        const { id, name, surname, email, text, status } = req.body;

        if (Array.isArray(id)) {
          res.status(400).json({ error: "Multiple IDs are not supported" });
          return;
        }
  
        if (isNaN(id)) {
          res.status(400).json({ error: "Invalid ID format" });
          return;
        }
        try {
          const updatedQuestion = await prisma.questions.update({
            where:{
              id: id,
            },
            data: {
              name,
              surname,
              email, 
              text,
              status,
          },
          });
  
          if(updatedQuestion){
            res.status(201).json(updatedQuestion)
          }else{
  
            res.status(500).json({error: "There is no directions"})
          }
        } catch (error) {
          console.log(error);
          
        }
        
      }else {
        res.status(405).end();
      }
}