import { NextPage } from 'next';

const Contacts: NextPage = () => {
  return (
    <>
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

      <div id="contact-list" className="max-w-screen-md w-screen mx-auto">
        <ul>
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
              <div
                id="contact-list-item-menu-dropdown-more"
                className="flex gap-2"
              >
                <button>Edit</button>
                <button>Fav</button>
                <button>Remove</button>
              </div>
            </div>
          </li>
          <li className="flex justify-between">
            <div id="contact-info" className="flex">
              <div id="avatar">
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
              <div
                id="contact-list-item-menu-dropdown-more"
                className="flex gap-2"
              >
                <button>Edit</button>
                <button>Fav</button>
                <button>Remove</button>
              </div>
            </div>
          </li>
          <li className="flex justify-between">
            <div id="contact-info" className="flex">
              <div id="avatar">
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
              <div
                id="contact-list-item-menu-dropdown-more"
                className="flex gap-2"
              >
                <button>Edit</button>
                <button>Fav</button>
                <button>Remove</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contacts;
