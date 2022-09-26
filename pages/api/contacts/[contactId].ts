import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { contactId } = req.query;

  if (req.method === 'GET') {
    const contact = await prisma.contact.findUnique({
      where: {
        id: contactId as string,
      },
    });
    return res.status(200).json(contact);
  }

  if (req.method === 'PUT') {
    const contactData = JSON.parse(req.body);

    const updatedContact = await prisma.contact.update({
      where: {
        id: contactId as string,
      },
      data: contactData,
    });
    return res.status(200).json(updatedContact);
  }

  if (req.method === 'DELETE') {
    const deletedContact = await prisma.contact.delete({
      where: {
        id: contactId as string,
      },
    });
    return res.status(200).json(deletedContact);
  }
  return res.status(405).json({ message: 'Method not allowed' });
}
