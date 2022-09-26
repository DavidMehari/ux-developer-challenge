const { PrismaClient } = require('@prisma/client');
const { contactsData } = require('./demo-db');
const prisma = new PrismaClient();

const load = async () => {
  
  
  try {
    contactsData.forEach(async (contact) => {
    
      await prisma.contact.create({
          data: contact
      })
      console.log('- Contact created -');
      
      
    })
      
    } catch (error) {
      console.error(error);
      
    } finally {
      await prisma.$disconnect();
    }


  
}

load();
