import Button from '@mui/material/Button';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { List, Link } from 'components/MainNav/MainNav.styled';

export default function AuthNav() {
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
        endIcon={<AssignmentIndOutlinedIcon />}
        component={Link}
        to="/register"
      >
        Sign up
      </Button>
      <Button
        sx={{
          color: '#f1f3f5',
          '&:hover, &:focus': { bgcolor: 'rgba(62,97,160,0.2)' },
          fontSize: '16px',
        }}
        variant="text"
        endIcon={<LoginOutlinedIcon />}
        component={Link}
        to="/login"
      >
        Log In
      </Button>
    </List>
  );
}
