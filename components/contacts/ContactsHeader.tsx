import { useRouter } from 'next/router';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ModalContext } from '../../state/context';
import BackIcon from '../../asset/icons/BackArrow.svg';
import LightModeIcon from '../../asset/icons/LightMode.svg';
import AddIcon from '../../asset/icons/Add.svg';
import SettingsIcon from '../../asset/icons/Settings.svg';
import MenuProfilePic from '../../asset/MenuProfilePic.png';
import Button from '../Button';

const ContactsHeader = () => {
  const router = useRouter();

  const { dispatch } = useContext(ModalContext);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      id="contacts-header"
      className="flex justify-center items-center mt-4 mb-4 sm:mb-0 sm:mt-24 h-18 sm:h-24"
    >
      <div>
        <Button
          icon={BackIcon}
          onClick={() => router.back()}
          btnStyle="secondary"
        />
      </div>

      <div id="contacts-headline" className="contacts-headline">
        <h1 id="contacts-title" className="text-primary">
          Contacts
        </h1>
        <div id="contacts-menu-buttons" className="flex gap-2 sm:gap-6">
          <div id="secondary-btns" className="flex gap-2">
            <motion.div whileHover={{ rotate: 90 }}>
              <Button
                icon={SettingsIcon}
                onClick={() => {}}
                btnStyle="secondary"
              />
            </motion.div>
            <Button
              icon={MenuProfilePic}
              onClick={() => {}}
              btnStyle="secondary"
            />
          </div>
          <Button
            icon={AddIcon}
            onClick={() => dispatch({ type: 'ADD_CONTACT' })}
            btnStyle="special"
            text="Add new"
          />
        </div>
      </div>

      <Button icon={LightModeIcon} onClick={() => {}} btnStyle="secondary" />
    </motion.div>
  );
};

export default ContactsHeader;
