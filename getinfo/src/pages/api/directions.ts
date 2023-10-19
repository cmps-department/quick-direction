import { PrismaClient } from '../../../prisma/generated/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient();
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
          const { name, description, professors, examplelink, additionallink } = req.body;
    
          const newDirection = await prisma.directions.create({
            data: {
                name,
                description, 
                professors, 
                examplelink, 
                additionallink 
            },
          });
    
          res.status(201).json(newDirection);

        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "An error occurred while creating the direction." });
        }
      }else if(req.method === "GET"){
        const allDirections = await prisma.directions.findMany()

        if(allDirections){

          res.status(201).json(allDirections)
        }else{

          res.status(500).json({error: "There is no directions"})
        }
      }else if(req.method === "DELETE"){
        const {id} = req.query

        if (Array.isArray(id)) {
          res.status(400).json({ error: "Multiple IDs are not supported" });
          return;
        }
  
        if (typeof id !== 'string') {
          res.status(400).json({ error: "Invalid ID format" });
          return;
        }

        const allDirections = await prisma.directions.delete({
          where:{
            id: id,
          }
        })

        if(allDirections){
          res.status(201).json({message: "Succesfuly deleted"})
        }else{
          res.status(500).json({message: "There is no directions"})
        }
      }else if(req.method === "PUT"){

        const {id} = req.query
        const { name, description, professors, examplelink, additionallink } = req.body;

        if (Array.isArray(id)) {
          res.status(400).json({ error: "Multiple IDs are not supported" });
          return;
        }
  
        if (typeof id !== 'string') {
          res.status(400).json({ error: "Invalid ID format" });
          return;
        }

        const updatedPost = await prisma.directions.update({
          where:{
            id: id,
          },
          data: {
            name,
            description, 
            professors, 
            examplelink, 
            additionallink 
          },
        });

        if(updatedPost){

          res.status(201).json(updatedPost)
        }else{

          res.status(500).json({error: "There is no directions"})
        }
      }else {
        res.status(405).end(); // Method Not Allowed
      }
}