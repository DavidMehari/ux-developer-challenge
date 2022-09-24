import { useRouter } from 'next/router';
import { useContext } from 'react';
import { ModalContext } from '../../state/context';

const ContactsHeader = () => {
  const router = useRouter();

  const { dispatch } = useContext(ModalContext);

  return (
    <div id="contacts-header" className="flex justify-center">
      <button type="button" onClick={() => router.back()}>
        back
      </button>
      <div
        id="contacts-headline"
        className="max-w-screen-md w-screen flex justify-between items-center"
      >
        <div id="contacts-title" className="text-xl font-bold">
          Contacts
        </div>
        <div id="contacts-menu" className="flex">
          <div id="secondary-btns" className="flex gap-2">
            <button>settings</button>
            <button>profile</button>
          </div>
          <button onClick={() => dispatch({ type: 'ADD_CONTACT' })}>
            + Add new
          </button>
        </div>
      </div>
      <button>light mode</button>
    </div>
  );
};

export default ContactsHeader;
