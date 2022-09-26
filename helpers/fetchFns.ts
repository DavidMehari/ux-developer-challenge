import { Key } from 'react';
import { ContactItem } from '../types/types';

export const getContactById = async (contactId: Key) => {
  if (!contactId) return;
  const response = await fetch(`/api/contacts/${contactId}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};

export const editContact = async (contact: ContactItem) => {
  if (!contact.id) return;
  const response = await fetch(`/api/contacts/${contact.id}`, {
    method: 'PUT',
    body: JSON.stringify(contact),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};

export const deleteContactById = async (contactId: Key) => {
  if (!contactId) return;
  const response = await fetch(`/api/contacts/${contactId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};

export const saveContact = async (contact: ContactItem) => {
  const response = await fetch('/api/contacts', {
    method: 'POST',
    body: JSON.stringify(contact),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};

export const uploadImageToServer = async (image: File | null) => {
  const body = new FormData();
  if (image) {
    body.append('file', image);
    const response = await fetch('/api/upload-profile-pic', {
      method: 'POST',
      body,
    });
  }
};
