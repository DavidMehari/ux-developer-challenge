import Image from 'next/image';
import { useRouter } from 'next/router';
import { Key, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import ContactInfo from './ContactInfo';

type ContactsListItemProps = {
  contact: ContactItem;
};

const ContactsListItem = ({ contact }: ContactsListItemProps) => {
  const { dispatch } = useContext(ModalContext);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleEditContact = async (contactId: Key) => {
    dispatch({ type: 'EDIT_CONTACT', payload: `${contactId}` });
    handleMoreMenuClose();
  };

  const handleDeleteContact = async (contactId: Key) => {
    const result = await deleteContactById(contactId);
    handleMoreMenuClose();
    refreshData();
  };

  const handleMoreMenuClose = () => {
    setIsMoreMenuOpen(false);
  };

  return (
    <motion.li
      key="modal"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.4 }}
      className="flex justify-between items-center h-14 sm:h-16 group"
    >
      <ContactInfo
        avatar={contact.avatar}
        name={contact.name}
        phone={contact.phone}
      />

      <div id="contact-list-item-menu" className="relative">
        <div
          id="contact-list-item-menu-main"
          className="gap-2 opacity-0 flex group-hover:opacity-100 transition duration-400 ease-in-out"
        >
          <Button icon={MuteIcon} onClick={() => {}} btnStyle="secondary" />
          <Button icon={CallIcon} onClick={() => {}} btnStyle="secondary" />
          <Button
            icon={MoreIcon}
            onClick={() => {
              setIsMoreMenuOpen((prev) => !prev);
            }}
            btnStyle="secondary"
          />
        </div>

        <div
          id="overlay"
          className={`fixed z-40 w-screen h-screen inset-0 bg-transparent ${
            !isMoreMenuOpen && 'hidden'
          }`}
          onClick={handleMoreMenuClose}
        ></div>

        <AnimatePresence>
          {isMoreMenuOpen && (
            <motion.div
              key={`moreMenuModal-${contact.id}`}
              initial={{ opacity: 0, scale: 0, x: '50%', y: '-50%' }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0, x: '50%', y: '-50%' }}
              transition={{ duration: 0.2 }}
              id="contact-list-item-menu-dropdown-more"
              className="more-menu"
            >
              <button
                className="more-menu-btn"
                onClick={() => handleEditContact(contact.id!)}
              >
                <Image
                  className="opacity-[0.56] h-5 w-5"
                  src={SettingsIcon}
                  alt="icon"
                />
                Edit
              </button>
              <button className="more-menu-btn" onClick={handleMoreMenuClose}>
                <Image
                  className="opacity-[0.56] h-5 w-5"
                  src={FavouriteIcon}
                  alt="icon"
                />
                Favourite
              </button>
              <button
                className="more-menu-btn"
                onClick={() => handleDeleteContact(contact.id!)}
              >
                <Image
                  className="opacity-[0.56] h-5 w-5"
                  src={DeleteIcon}
                  alt="icon"
                />
                Remove
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
};

export default ContactsListItem;
