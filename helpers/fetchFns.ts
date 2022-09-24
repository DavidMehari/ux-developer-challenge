import { Key } from "react";
import { ContactItem } from "../types/types";

export const getContactById = async (contactId: Key) => {
  const response = await fetch(`/api/contacts/${contactId}`)
  
  if (!response.ok) {
    throw new Error(response.statusText);
  }

 return await response.json()
}

export const editContact = async (contact: ContactItem) => {
  console.log('PUT', contact);
  
  if (!contact.id) return

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
  console.log('DELETE', contactId);
  
  if (!contactId) return

  const response = await fetch(`/api/contacts/${contactId}`, {
    method: 'DELETE',
  })
  
  if (!response.ok) {
    throw new Error(response.statusText);
  }

 return await response.json()
}

export const saveContact = async (contact: ContactItem) => {
  console.log('POST', contact);
  
  const response = await fetch('/api/contacts', {
    method: 'POST',
    body: JSON.stringify(contact),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};