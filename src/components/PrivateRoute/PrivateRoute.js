import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import { UserAuthGoogle } from 'context/AuthContextGoogle';

const PrivateRoute = ({ children, redirectPath = '/login' }) => {
  const { user } = UserAuthGoogle();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn || user ? children : <Navigate to={redirectPath} />;
};
export default PrivateRoute;
