import { NextPage } from 'next';
import ContactsHeader from '../components/contacts/ContactsHeader';
import ContactsList from '../components/contacts/ContactsList';

const Contacts: NextPage = () => {
  return (
    <>
      <ContactsHeader />
      <ContactsList />
    </>
  );
};

export default Contacts;
