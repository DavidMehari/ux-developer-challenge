import Image from "next/image";
import { ContactItem } from "../../types/types";

type ContactsListItemProps = {
  contact: ContactItem
}

const ContactsListItem = ({contact}: ContactsListItemProps ) => {
  return (
    <li className="flex justify-between">
      <div id="contact-info" className="flex">
        <div id="contacts-avatar">
          <Image src={`/images/${contact.profilePic}`} alt="prof" width={50} height={50} />
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
          <button>Edit</button>
          <button>Fav</button>
          <button>Remove</button>
        </div>
      </div>
    </li>
  );
};

export default ContactsListItem;
