import axios from 'axios';

export const fetchItems = async () => {
  const { data } = await axios('/contacts');
  return data;
};

export const addItem = async newContact => {
  const { data } = await axios.post('/contacts', newContact);
  return data;
};

export const deleteItem = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

export const editItem = async ({ id, ...fields }) => {
  const { data } = await axios.patch(`/contacts/${id}`, fields);
  return data;
};
