import ContactsListItem from './ContactsListItem';
import { ContactItem } from '../../types/types';
import { AnimatePresence } from 'framer-motion';

type ContactsProps = {
  contacts: ContactItem[];
};

const ContactsList = ({ contacts }: ContactsProps) => {
  return (
    <div
      id="contact-list"
      className="max-w-screen-md w-screen mx-auto px-6 pt-3"
    >
      <ul>
        <AnimatePresence mode="popLayout">
          {contacts?.map((contactItem: ContactItem) => (
            <ContactsListItem key={contactItem.id} contact={contactItem} />
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default ContactsList;
