import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
import { showError } from 'components/Notification/Notification';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state, _) {
      state.isLoggedIn = false;
    },
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      showError('Oops, something went wrong. Please try again');
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected](state, action) {
      state.error = action.payload;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      showError('Oops, something went wrong. Please try again');
    },
    [authOperations.logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state, _) {
      state.isFetchingUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.error = action.payload;
      state.isFetchingUser = false;
    },
  },
});

export default authSlice.reducer;
