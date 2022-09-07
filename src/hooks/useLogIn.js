import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { authOperations } from '../redux/auth';
import { UserAuthGoogle } from 'context/AuthContextGoogle';

export const useLogIn = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { googleSignIn, user } = UserAuthGoogle();

  const logInValidation = {
    name: { required: 'Name is required' },
    email: {
      required: 'Email is required',
      pattern: {
        value:
          //eslint-disable-next-line
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Invalid email format',
      },
    },
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must have at least 8 characters',
      },
    },
  };

  const handleLogin = ({ email, password }) =>
    dispatch(authOperations.logIn({ email, password }));

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user?.emailVerified) {
      async function fetchData() {
        dispatch(
          authOperations.logIn({
            email: user.email,
            password: user.uid,
          })
        );
      }
      fetchData();
    }
  }, [dispatch, user]);

  return {
    register,
    handleSubmit,
    handleLogin,
    handleGoogleSignIn,
    logInValidation,
    errors,
  };
};
