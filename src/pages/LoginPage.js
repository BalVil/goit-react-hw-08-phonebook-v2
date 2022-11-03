import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { GoogleButton } from 'react-google-button';
import { useLogIn } from 'hooks/useLogIn';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    handleLogin,
    handleGoogleSignIn,
    logInValidation,
    errors,
  } = useLogIn();

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
          bgcolor: '#fff',
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
            Log In
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(handleLogin)}
            sx={{ mt: 3 }}
            textAlign="center"
          >
            <Grid container spacing={2}>
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
                  {...register('email', logInValidation.email)}
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
                  {...register('password', logInValidation.password)}
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
                mb: 2,
                bgcolor: '#32a5cf',
                '&:hover, &:focus': { bgcolor: '#3e61a0' },
              }}
            >
              Log in
            </Button>

            {/* <Grid
              container
              justifyContent="center"
              sx={{
                mt: 3,
                mb: 1,
              }}
            >
              <GoogleButton onClick={handleGoogleSignIn} />
            </Grid> */}

            <Grid container justifyContent="center">
              <Grid item>
                <Link component={RouterLink} to="/register" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default LoginPage;
