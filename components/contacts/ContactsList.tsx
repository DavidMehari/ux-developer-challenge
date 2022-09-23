import ContactsListItem from "./ContactsListItem"
import { ContactItem } from "../../types/types";

import db from "../../db.json"

const ContactsList = () => {

  console.log(db);
  
  return (
    <div id="contact-list" className="max-w-screen-md w-screen mx-auto">
        <ul>
          {db.contactsData.map((contactItem: ContactItem) => (
            <ContactsListItem key={contactItem.id} contact={contactItem}/>
          ))}
        </ul>
      </div>
  )
}

export default ContactsList