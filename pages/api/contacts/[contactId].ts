import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  const { contactId } = req.query
  
  if (req.method === 'GET') {

    const contact = await prisma.contact.findUnique({
      where: {
        id: contactId,
      },
    })

    return res.status(200).json(contact)
  }
  return res.status(405).json({message: 'Method not allowed'})
}