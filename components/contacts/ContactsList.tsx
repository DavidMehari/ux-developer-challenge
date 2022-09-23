import ContactsListItem from "./ContactsListItem"

const ContactsList = () => {
  return (
    <div id="contact-list" className="max-w-screen-md w-screen mx-auto">
        <ul>
          {[1, 2, 3].map(listItem => (
            <ContactsListItem key={listItem}/>
          ))}
        </ul>
      </div>
  )
}

export default ContactsList