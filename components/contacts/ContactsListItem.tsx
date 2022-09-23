const ContactsListItem = () => {
  return (
    <li className="flex justify-between">
      <div id="contact-info" className="flex">
        <div id="contacts-avatar">
          <img src="../images/Jake.png" alt="prof" width={50} height={50} />
        </div>
        <div id="contact-details">
          <h3>name</h3>
          <p>+54856458612</p>
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
