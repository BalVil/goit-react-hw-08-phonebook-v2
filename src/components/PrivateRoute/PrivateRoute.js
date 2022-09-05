import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

const PrivateRoute = ({ children, redirectPath = '/login' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectPath} />;
};
export default PrivateRoute;
