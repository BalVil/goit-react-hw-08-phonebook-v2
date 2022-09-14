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
          fontSize: '16px',
          marginRight: 3,
        }}
        variant="text"
        component={Link}
        to="/"
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          sx={{
            color: '#f1f3f5',
            '&:hover, &:focus': { bgcolor: 'rgba(62,97,160,0.2)' },
            fontSize: '16px',
          }}
          variant="text"
          component={Link}
          to="contacts"
        >
          Contacts
        </Button>
      )}
    </List>
  );
};
export default MainNav;
