import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if (req.method === 'POST') {
    const contactData = JSON.parse(req.body)
    
    const savedContact = await prisma.contact.create({
      data: contactData
    })
    
    return res.status(201).json(savedContact)
  }
  return res.status(405).json({message: 'Method not allowed'})
}