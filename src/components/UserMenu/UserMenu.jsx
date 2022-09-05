import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './avatar-default.png';
import { Wrap, Avatar, UserGreeting } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <Wrap>
      <Avatar src={avatar} alt="avatar" width="32" />
      <UserGreeting>Welcome, {name}</UserGreeting>
      <Button
        sx={{
          color: '#f1f3f5',
          fontWeight: 600,
          fontSize: '16px',
          padding: '3px 8px',
          textTransform: 'none',
        }}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        variant="text"
        endIcon={<LogoutIcon />}
      >
        Log Out
      </Button>
    </Wrap>
  );
}
