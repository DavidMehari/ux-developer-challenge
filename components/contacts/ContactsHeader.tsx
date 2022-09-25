import { useRouter } from 'next/router';
import { useContext } from 'react';
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
    <div
      id="contacts-header"
      className="flex justify-center items-center mt-24 h-24 gap-12"
    >
      <div className="">
        <Button
          icon={BackIcon}
          onClick={() => router.back()}
          btnStyle="secondary"
        />
      </div>

      <div
        id="contacts-headline"
        className="max-w-screen-md w-screen flex justify-between items-center"
      >
        <h1 id="contacts-title" className="text-primary">
          Contacts
        </h1>
        <div id="contacts-menu-buttons" className="flex gap-6">
          <div id="secondary-btns" className="flex gap-2">
            <Button
              icon={SettingsIcon}
              onClick={() => {}}
              btnStyle="secondary"
            />
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
    </div>
  );
};

export default ContactsHeader;
