const getUsername = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsFetchingUser = state => state.auth.isFetchingUser;

const authSelectors = {
  getUsername,
  getUserEmail,
  getIsLoggedIn,
  getIsFetchingUser,
};
export default authSelectors;
