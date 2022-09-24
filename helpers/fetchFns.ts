import { Key } from "react";

export const getContactById = async (contactId: Key) => {
  const response = await fetch(`/api/contacts/${contactId}`)
  
  if (!response.ok) {
    throw new Error(response.statusText);
  }

 return await response.json()
}