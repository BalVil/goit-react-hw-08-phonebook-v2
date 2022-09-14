import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './avatar-default.png';
import { Wrap, Avatar } from './UserMenu.styled';
import { UserAuthGoogle } from 'context/AuthContextGoogle';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  const { logOut, user } = UserAuthGoogle();

  const handleSignOut = async () => {
    if (name) {
      dispatch(authOperations.logOut());
    }

    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrap>
      <Avatar src={avatar || user?.photoURL} alt="avatar" width="32" />

      {(name || user?.displayName) && (
        <Typography
          component="span"
          sx={{ marginRight: '16px', color: '#f4ecc2', fontSize: '16px' }}
        >
          Welcome, {name || user?.displayName}
        </Typography>
      )}

      <Button
        sx={{
          color: '#f1f3f5',
          padding: '3px 8px',
          '&:hover, &:focus': { bgcolor: 'rgba(62,97,160,0.2)' },
          fontSize: '16px',
        }}
        type="button"
        onClick={() => dispatch(handleSignOut)}
        variant="text"
        endIcon={<LogoutIcon />}
      >
        Log Out
      </Button>
    </Wrap>
  );
}
