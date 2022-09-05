import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contacts-api';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchItems();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const contact = await contactsAPI.addItem(newContact);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await contactsAPI.deleteItem(contactId);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contactData, { rejectWithValue }) => {
    try {
      const contact = await contactsAPI.editItem(contactData);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
