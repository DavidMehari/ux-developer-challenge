const ContactsHeader = () => {
  return (
    <div id="contacts-header" className="flex justify-center">
      <button>back</button>
      <div
        id="contacts-headline"
        className="max-w-screen-md w-screen flex justify-between items-center"
      >
        <div id="contacts-title" className="text-xl font-bold">
          Title
        </div>
        <div id="contacts-menu" className="flex">
          <div id="secondary-btns" className="flex gap-2">
            <button>settings</button>
            <button>profile</button>
          </div>
          <button>+ Add new</button>
        </div>
      </div>
      <button>light mode</button>
    </div>
  );
};

export default ContactsHeader;
