import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import React, { createContext, useReducer, useState } from 'react';
import ContactsHeader from '../components/contacts/ContactsHeader';
import ContactsList from '../components/contacts/ContactsList';
import Modal from '../components/Modal';
import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';
import { ModalAction, ModalState } from '../types/types';
import { ModalContext } from '../state/context';
import { initialState, modalReducer } from '../state/reducer';

const Contacts: NextPage = ({
  initialContacts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  
  

  

  const [state, dispatch] = useReducer(modalReducer, initialState);

  // const [modalOpen, setModalOpen] = useState(false)

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  return (
    <>
      <ModalContext.Provider value={{ state, dispatch }}>
        <ContactsHeader />
        <ContactsList contacts={initialContacts} />

        <Modal
          refreshData={refreshData}
        />
      </ModalContext.Provider>
    </>
  );
};

export default Contacts;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const prisma = new PrismaClient();
  const contacts = await prisma.contact.findMany();

  return {
    props: {
      initialContacts: contacts,
    },
  };
};
