import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import {
  editContact,
  getContactById,
  saveContact,
  uploadImageToServer,
} from '../helpers/fetchFns';
import { motion, AnimatePresence } from 'framer-motion';
import { ModalContext } from '../state/context';
import { ContactItem } from '../types/types';
import Button from './Button';
import AddIcon from '../asset/icons/Add.svg';
import ChangeIcon from '../asset/icons/Change.svg';
import DeleteIcon from '../asset/icons/Delete.svg';

type ModalProps = {
  refreshData: Function;
  contact?: ContactItem;
};

const defaultContact = {
  name: '',
  phone: '',
  email: '',
  avatar: 'Default.png',
};

const Modal = ({ refreshData, contact = defaultContact }: ModalProps) => {
  const { state, dispatch } = useContext(ModalContext);

  const [formData, setFormData] = useState<ContactItem>(contact);
  const [image, setImage] = useState<File | null>(null);
  const [createObjectURL, setCreateObjectURL] = useState<Blob | string>(
    `/images/${defaultContact.avatar}`
  );

  useEffect(() => {
    if (state.mode === 'Add') {
      setFormData(defaultContact);
      setCreateObjectURL(`/images/${defaultContact.avatar}`);
    }
    if (state.mode === 'Edit') {
      getContactById(state.contactIdToEdit).then((response) => {
        setFormData(response);
        setCreateObjectURL(`/images/${response.avatar}`);
      });
    }
  }, [state]);

  const uploadToClient = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
      setFormData((prev: ContactItem) => ({ ...prev, avatar: i.name }));
    }
  };

  const handleClose = () => {
    dispatch({ type: 'CLOSE_MODAL' });
    setImage(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prev: ContactItem) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRemoveImage = () => {
    setCreateObjectURL(`/images/${defaultContact.avatar}`);
    setImage(null);
    setFormData((prev: ContactItem) => ({
      ...prev,
      avatar: defaultContact.avatar,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await uploadImageToServer(image);
      if (state.mode === 'Add') await saveContact(formData);
      if (state.mode === 'Edit') await editContact(formData);
    } catch (error) {
      console.error(error);
    }

    const resetForm = event.target as HTMLFormElement;
    setFormData(defaultContact);
    dispatch({ type: 'CLOSE_MODAL' });
    refreshData();
    resetForm.reset();
  };

  return (
    <>
      <AnimatePresence>
        {state.modalOpen && (
          <>
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              id="modal"
              className={`flex flex-col gap-6 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[364px] h-[540] bg-grey-100 rounded-lg pt-6 px-6
        }`}
            >
              <h2>{state.mode} contact</h2>

              <form
                id="add-contact-form"
                className="flex flex-col gap-6"
                onSubmit={handleSubmit}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={`${createObjectURL}`}
                    alt="profile pic preview"
                    width={88}
                    height={88}
                    className="h-[88px] w-[88px] object-cover rounded-full border box-border border-grey-70 "
                  />
                  <div id="profile-pic-buttons" className="flex gap-2">
                    <input
                      type="file"
                      className="hidden"
                      id="profile"
                      name="profile"
                      onChange={uploadToClient}
                    />
                    <label
                      role="button"
                      className="btn btn-primary btn-icon-text"
                      htmlFor="profile"
                    >
                      {createObjectURL ===
                      `/images/${defaultContact.avatar}` ? (
                        <>
                          <Image src={AddIcon} alt="icon" />
                          {'Add picture'}
                        </>
                      ) : (
                        <>
                          <Image src={ChangeIcon} alt="icon" />
                          {'Change picture'}
                        </>
                      )}
                    </label>
                    {createObjectURL !== `/images/${defaultContact.avatar}` ||
                    image ? (
                      <Button
                        icon={DeleteIcon}
                        onClick={handleRemoveImage}
                        btnStyle="primary"
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="name"
                    className="text-secondary contact-message"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jamie Wright"
                    required
                    value={formData?.name || ''}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="phone"
                    className="text-secondary contact-message"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="+01 234 5678"
                    value={formData?.phone || ''}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-secondary contact-message"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="jamie.wright@mail.com"
                    value={formData?.email || ''}
                    onChange={handleChange}
                  />
                </div>
              </form>

              <div className="flex justify-end gap-2 py-6">
                <button
                  id="cancel"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  id="done"
                  form="add-contact-form"
                  type="submit"
                  className="btn btn-primary"
                >
                  Done
                </button>
              </div>
            </motion.div>
            <motion.div
              key="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              id="overlay"
              className={`fixed z-40 w-screen h-screen inset-0 bg-black bg-opacity-40`}
              onClick={handleClose}
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
