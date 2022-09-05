import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  deleteContact,
  addContact,
  editContact,
} from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setIsLoading: (state, _) => {
      state.isLoading = false;
    },
  },

  extraReducers: {
    [getContacts.pending]: (state, _) => {
      state.isLoading = 'fetch';
    },
    [getContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getContacts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    [deleteContact.pending]: (state, action) => {
      state.isLoading = action.meta.arg;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
      state.isLoading = false;
    },
    [deleteContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    [addContact.pending]: (state, _) => {
      state.isLoading = 'add';
    },
    [addContact.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = 'addSuccess';
    },
    [addContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    [editContact.pending]: (state, _) => {
      state.isLoading = 'edit';
    },
    [editContact.fulfilled]: (state, { payload: { id, name, number } }) => {
      state.isLoading = 'editSuccess';
      state.items = state.items.map(item => {
        return item.id === id
          ? {
              ...item,
              name,
              number,
            }
          : item;
      });
    },
    [editContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const contactsActions = {
  ...contactsSlice.actions,
  getContacts,
  deleteContact,
  addContact,
  editContact,
};
export const contactsReducer = contactsSlice.reducer;
