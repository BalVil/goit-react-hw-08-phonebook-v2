import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './avatar-default.png';
import { Wrap, Avatar } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const matches = useMediaQuery('(min-width:700px)');
  const avatar = defaultAvatar;

  return (
    <Wrap>
      <Avatar
        src={avatar}
        alt="avatar"
        width="32"
        height="32"
        referrerPolicy="no-referrer"
      />

      {name && (
        <Typography
          component="span"
          sx={{ marginRight: '16px', color: '#f4ecc2', fontSize: '16px' }}
        >
          Welcome, {name}
        </Typography>
      )}

      {matches ? (
        <Button
          sx={{
            color: '#f1f3f5',
            '&:hover, &:focus': { bgcolor: 'rgba(62,97,160,0.2)' },
            fontSize: '16px',
          }}
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
          variant="text"
          endIcon={<LogoutIcon />}
        >
          Log Out
        </Button>
      ) : (
        <Button
          sx={{
            color: '#f1f3f5',
            padding: '0px',
            '&:hover, &:focus': { bgcolor: 'rgba(62,97,160,0.2)' },
            fontSize: '16px',
            minWidth: '24px',
          }}
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
          variant="text"
        >
          Log Out
        </Button>
      )}
    </Wrap>
  );
}
