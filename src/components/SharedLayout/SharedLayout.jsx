import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import { Header } from './SharedLayout.styled';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import Navigation from 'components/MainNav';
import { SkeletonFrame, SkeletonOutlet } from 'components/Skeleton/Skeleton';

const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingUser = useSelector(authSelectors.getIsFetchingUser);

  return isFetchingUser ? (
    <SkeletonFrame />
  ) : (
    <>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>

      <Suspense fallback={<SkeletonOutlet />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
