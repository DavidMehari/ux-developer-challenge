import Image from 'next/image';
import { useRouter } from 'next/router';
import { Key, useContext } from 'react';
import { deleteContactById } from '../../helpers/fetchFns';
import { ModalContext } from '../../state/context';
import { ContactItem } from '../../types/types';
import Button from '../Button';
import MuteIcon from '../../asset/icons/Mute.svg';
import CallIcon from '../../asset/icons/Call.svg';
import MoreIcon from '../../asset/icons/More.svg';
import SettingsIcon from '../../asset/icons/Settings.svg';
import FavouriteIcon from '../../asset/icons/Favourite.svg';
import DeleteIcon from '../../asset/icons/Delete.svg';

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
    <li className="flex justify-between items-center h-16 group">
      <div id="contact-info" className="flex gap-4">
        
        <Image
          className="h-10 w-10 object-cover rounded-full"
          src={`/images/${contact.avatar}`}
          alt="prof"
          width={40}
          height={40}
        />
        
        <div id="contact-details" className='h-10'>
          <h3>{contact.name}</h3>
          <p className='contact-message text-secondary'>{contact.phone}</p>
        </div>
      </div>

      <div id="contact-list-item-menu">
        <div id="contact-list-item-menu-main" className="gap-2 hidden group-hover:flex">
          <Button
              icon={MuteIcon}
              onClick={() => {}}
              btnStyle="secondary"
            />
            <Button
              icon={CallIcon}
              onClick={() => {}}
              btnStyle="secondary"
            />
            <Button
              icon={MoreIcon}
              onClick={() => {}}
              btnStyle="secondary"
            />
        </div>
        <div id="contact-list-item-menu-dropdown-more" className="hidden gap-2">
          {/* <button onClick={() => handleEditContact(contact.id!)}>Edit</button>
          <button>Fav</button>
          <button onClick={() => handleDeleteContact(contact.id!)}>
            Remove
          </button> */}
          <Button
              icon={SettingsIcon}
              onClick={() => handleEditContact(contact.id!)}
              btnStyle="secondary"
              text='Edit'
            />
            <Button
              icon={FavouriteIcon}
              onClick={() => {}}
              btnStyle="secondary"
              text='Favourite'
            />
            <Button
              icon={DeleteIcon}
              onClick={() => handleDeleteContact(contact.id!)}
              btnStyle="secondary"
              text='Remove'
            />
        </div>
      </div>
    </li>
  );
};

export default ContactsListItem;
