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

type ContactsListItemProps = {
  contact: ContactItem;
};

const ContactsListItem = ({ contact }: ContactsListItemProps) => {
  const { dispatch } = useContext(ModalContext);
  const router = useRouter();

  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

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
      key='modal'
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.4 }}
      className="flex justify-between items-center h-14 sm:h-16 group"
      >
      <div id="contact-info" className="flex gap-4">
        <Image
          className="h-10 w-10 object-cover rounded-full"
          src={`/images/${contact.avatar}`}
          alt="prof"
          width={40}
          height={40}
        />

        <div id="contact-details" className="h-10">
          <h3>{contact.name}</h3>
          <p className="contact-message text-secondary">{contact.phone}</p>
        </div>
      </div>

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
              animate={{ opacity: 1, scale: 1, x:0, y:0 }}
              exit={{ opacity: 0, scale: 0 , x: '50%', y: '-50%'}}
              transition={{ duration: 0.2 }}
              id="contact-list-item-menu-dropdown-more"
              className={`flex flex-col items-start w-[219px] bg-grey-80 rounded-lg absolute right-0 top-12 z-50`}
            >
              <button
                className="flex gap-3 items-center w-full py-3 px-[10px] text-sm hover:bg-grey-70 active:bg.grey-60 first:rounded-t-lg last:rounded-b-lg"
                onClick={() => handleEditContact(contact.id!)}
              >
                <Image
                  className="opacity-[0.56] h-5 w-5"
                  src={SettingsIcon}
                  alt="icon"
                />
                Edit
              </button>
              <button
                className="flex gap-3 items-center w-full py-3 px-[10px] text-sm hover:bg-grey-70 active:bg.grey-60 first:rounded-t-lg last:rounded-b-lg"
                onClick={handleMoreMenuClose}
              >
                <Image
                  className="opacity-[0.56] h-5 w-5"
                  src={FavouriteIcon}
                  alt="icon"
                />
                Favourite
              </button>
              <button
                className="flex gap-3 items-center w-full py-3 px-[10px] text-sm hover:bg-grey-70 active:bg.grey-60 first:rounded-t-lg last:rounded-b-lg"
                onClick={() => handleDeleteContact(contact.id!)}
              >
                <Image
                  className="opacity-[0.56] h-5 w-5"
                  src={DeleteIcon}
                  alt="icon"
                />
                Remove
              </button>
              {/* <Button
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
            /> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
};

export default ContactsListItem;
