import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useState } from 'react';
import ContactsHeader from '../components/contacts/ContactsHeader';
import ContactsList from '../components/contacts/ContactsList';
import Modal from '../components/Modal';
import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';

const Contacts: NextPage = ({initialContacts}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const [modalOpen, setModalOpen] = useState(false)

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  }

  return (
    <>
      <ContactsHeader setModalOpen={setModalOpen}/>
      <ContactsList contacts={initialContacts} />

      <Modal mode="Add" refreshData={refreshData} modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

export default Contacts;

export const getServerSideProps: GetServerSideProps = async (context) => {
  
  const prisma = new PrismaClient();
  const contacts = await prisma.contact.findMany();

  return {
    props: {
      initialContacts: contacts
    }
  }
}