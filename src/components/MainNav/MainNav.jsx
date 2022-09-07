import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { List, Link } from './MainNav.styled';
import { authSelectors } from 'redux/auth';

export const MainNav = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <List>
      <Button
        sx={{
          color: '#f1f3f5',
          '&:hover, &:focus': { bgcolor: 'rgba(62,97,160,0.2)' },
          marginRight: 3,
        }}
        variant="text"
      >
        <Link to="/">Home</Link>
      </Button>
      {isLoggedIn && (
        <Button
          sx={{
            color: '#f1f3f5',
            '&:hover, &:focus': { bgcolor: 'rgba(62,97,160,0.2)' },
          }}
          variant="text"
        >
          <Link to="contacts">Contacts</Link>
        </Button>
      )}
    </List>
  );
};
export default MainNav;
