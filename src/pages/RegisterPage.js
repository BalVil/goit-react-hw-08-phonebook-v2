import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useSignUp } from 'hooks/useSignUp';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    handleRegistration,
    registerValidation,
    errors,
  } = useSignUp();

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        marginTop: 4,
      }}
    >
      <Box
        sx={{
          padding: 4,
          borderRadius: 2,

          '&:hover': { boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 4px;' },
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(handleRegistration)}
            sx={{ mt: 3 }}
            textAlign="center"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  type="text"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  variant="standard"
                  {...register('name', registerValidation.name)}
                  error={Boolean(errors.name)}
                  helperText={errors?.name && errors.name.message}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  type="email"
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  variant="standard"
                  {...register('email', registerValidation.email)}
                  error={Boolean(errors.email)}
                  helperText={errors?.email && errors.email.message}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant="standard"
                  {...register('password', registerValidation.password)}
                  error={Boolean(errors.password)}
                  helperText={errors?.password && errors.password.message}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                mb: 4,
                bgcolor: '#32a5cf',
                '&:hover, &:focus': { bgcolor: '#3e61a0' },
              }}
            >
              Sign up
            </Button>

            <Grid container justifyContent="center">
              <Grid item>
                <Typography
                  variant="body1"
                  sx={{ color: 'rgba(0, 0, 0, 0.6)' }}
                >
                  Are you already registered with us?&nbsp;
                  <Link
                    component={RouterLink}
                    to="/login"
                    sx={{ '&:hover': { letterSpacing: 2 } }}
                  >
                    LogIn
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default RegisterPage;
