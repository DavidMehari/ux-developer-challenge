import Image from 'next/image';
import { useRouter } from 'next/router';
import { Key, useContext } from 'react';
import { deleteContactById } from '../../helpers/fetchFns';
import { ModalContext } from '../../state/context';
import { ContactItem } from '../../types/types';

type ContactsListItemProps = {
  contact: ContactItem;
};

const ContactsListItem = ({ contact }: ContactsListItemProps) => {
  const { dispatch } = useContext(ModalContext);
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleEditContact = async (contactId: Key) => {
    dispatch({ type: 'EDIT_CONTACT', payload: `${contactId}` });
  };

  const handleDeleteContact = async (contactId: Key) => {
    const result = await deleteContactById(contactId);
    refreshData();
  };

  return (
    <li className="flex justify-between">
      <div id="contact-info" className="flex gap-2">
        <div id="contacts-avatar">
          <Image
            className="h-16 w-16 object-cover rounded-full"
            src={`/images/${contact.avatar}`}
            alt="prof"
            width={50}
            height={50}
          />
        </div>
        <div id="contact-details">
          <h3 className="font-bold">{contact.name}</h3>
          <p>{contact.phone}</p>
        </div>
      </div>
      <div id="contact-list-item-menu">
        <div id="contact-list-item-menu-main" className="flex gap-2">
          <button className="">mute</button>
          <button>call</button>
          <button>more</button>
        </div>
        <div id="contact-list-item-menu-dropdown-more" className="flex gap-2">
          <button onClick={() => handleEditContact(contact.id!)}>Edit</button>
          <button>Fav</button>
          <button onClick={() => handleDeleteContact(contact.id!)}>
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default ContactsListItem;
