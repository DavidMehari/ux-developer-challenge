import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { editContact, getContactById, saveContact } from '../helpers/fetchFns';
import { ModalContext } from '../state/context';
import { ContactItem } from '../types/types';

type ModalProps = {
  refreshData: Function;
  contact?: ContactItem;
};

const defaultContact = {
  name: '',
  phone: '',
  email: '',
  avatar: 'Default.png',
}

const Modal = ({ refreshData, contact=defaultContact }: ModalProps) => {

  const { state, dispatch } = useContext(ModalContext);

  const [formData, setFormData] = useState<ContactItem>(contact);

  const [image, setImage] = useState<File | null>(null);
  const [createObjectURL, setCreateObjectURL] = useState<Blob | string>(
    '/images/Default.png'
  );

  useEffect(() => {
    if (state.mode === 'Add') {
      setFormData(defaultContact)
    }
    if (state.mode === 'Edit') {
      getContactById(state.contactIdToEdit).then((response) => {
        setFormData(response)
      })
    }
  }, [state])
  

  const uploadToClient = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));

      setFormData((prev: any) => ({ ...prev, avatar: i.name }));
    }
  };

  const uploadToServer = async () => {
    const body = new FormData();
    if (image) {
      console.log('img uploaded');
      
      body.append('file', image);
      const response = await fetch('/api/upload-profile-pic', {
        method: 'POST',
        body,
      });
    }
  };

  const handleClose = () => {
    // setModalOpen(false);
    dispatch({type: "CLOSE_MODAL"})
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('form submitted');

    try {
      await uploadToServer();
      if (state.mode === 'Add') await saveContact(formData);
      if (state.mode === 'Edit') await editContact(formData);
    } catch (error) {
      console.log(error);
    }

    const resetForm = event.target as HTMLFormElement;

    setFormData(defaultContact);
    
    dispatch({type: "CLOSE_MODAL"})
    refreshData();
    resetForm.reset();
  };

  
  
  return (
    <>
      <div
        id="overlay"
        className={`fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60 ${
          !state.modalOpen && 'hidden'
        }`}
        onClick={handleClose}
      ></div>

      <div
        id="modal"
        className={`fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 bg-white rounded-md px-8 py-6 space-y-5 drop-shadow-lg ${
          !state.modalOpen && 'hidden'
        }`}
      >
        <h1 className="text-2xl font-semibold">{state.mode} Contact</h1>
        <div className="py-5 border-t border-b border-gray-300">
          <form
            id="add-contact-form"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center gap-2">
              <Image
                src={`${createObjectURL}`}
                alt="profile pic preview"
                width={60}
                height={60}
                className="h-16 w-16 object-cover rounded-full"
              />
              <input
                type="file"
                className="hidden"
                id="profile"
                name="profile"
                onChange={uploadToClient}
              />
              <label
                role="button"
                className="border-black border"
                htmlFor="profile"
              >
                + Add picture
              </label>
              <button>Del</button>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Jamie Wright"
                required
                value={formData?.name || ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="+01 234 5678"
                required
                value={formData?.phone || ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="jamie.wright@mail.com"
                required
                value={formData?.email || ''}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="flex justify-end gap-2">
          <button
            id="cancel"
            className="px-5 py-2 bg-indigo-500 hover:bg-indigo-700 text-white cursor-pointer rounded-md"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            id="done"
            form="add-contact-form"
            type="submit"
            className="px-5 py-2 bg-indigo-500 hover:bg-indigo-700 text-white cursor-pointer rounded-md"
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
