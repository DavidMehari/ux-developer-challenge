import Image from "next/image";
import { ContactItem } from "../../types/types";

type ContactsListItemProps = {
  contact: ContactItem
}

const ContactsListItem = ({contact}: ContactsListItemProps ) => {

  const handleEditContact = async (contactId: any) => {
    const contact = await getContactById(contactId)
    console.log(contact);
  }

  const getContactById = async (contactId: any) => {
    const response = await fetch(`/api/contacts/${contactId}`)
    
    if (!response.ok) {
      throw new Error(response.statusText);
    }

   return await response.json()
  }

  return (
    <li className="flex justify-between">
      <div id="contact-info" className="flex gap-2">
        <div id="contacts-avatar">
          <Image className="h-16 w-16 object-cover rounded-full" src={`/images/${contact.avatar}`} alt="prof" width={50} height={50} />
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
          <button onClick={() => handleEditContact(contact.id)}>Edit</button>
          <button>Fav</button>
          <button>Remove</button>
        </div>
      </div>
    </li>
  );
};

export default ContactsListItem;
