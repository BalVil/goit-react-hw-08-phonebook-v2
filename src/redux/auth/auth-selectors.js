const getUsername = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsFetchingUser = state => state.auth.isFetchingUser;

const getUserToken = state => state.auth.token;

const authSelectors = {
  getUsername,
  getUserEmail,
  getIsLoggedIn,
  getIsFetchingUser,
  getUserToken,
};
export default authSelectors;
