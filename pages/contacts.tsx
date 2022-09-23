import { NextPage } from 'next';
import { useState } from 'react';
import ContactsHeader from '../components/contacts/ContactsHeader';
import ContactsList from '../components/contacts/ContactsList';
import Modal from '../components/Modal';

const Contacts: NextPage = () => {

  const [modalOpen, setModalOpen] = useState(true)

  return (
    <>
      <ContactsHeader setModalOpen={setModalOpen}/>
      <ContactsList />

      <Modal title="Add contact" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

export default Contacts;
