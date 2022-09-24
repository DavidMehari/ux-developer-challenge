import ContactsListItem from './ContactsListItem';
import { ContactItem } from '../../types/types';

type ContactsProps = {
  contacts: ContactItem[];
};

const ContactsList = ({ contacts }: ContactsProps) => {
  return (
    <div id="contact-list" className="max-w-screen-md w-screen mx-auto">
      <ul>
        {contacts?.map((contactItem: ContactItem) => (
          <ContactsListItem key={contactItem.id} contact={contactItem} />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
