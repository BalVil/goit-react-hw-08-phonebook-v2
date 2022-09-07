import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { authOperations } from 'redux/auth';
import { UserAuthGoogle } from 'context/AuthContextGoogle';

export const useSignUp = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { googleSignIn, user } = UserAuthGoogle();
  const navigate = useNavigate();

  const registerValidation = {
    name: {
      required: 'Name is required',
      maxLength: {
        value: 50,
        message: 'This name is too long',
      },
    },
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

  const handleRegistration = data => dispatch(authOperations.register(data));

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
          authOperations.register({
            name: user.displayName,
            email: user.email,
            password: user.uid,
          })
        );
      }
      fetchData();
    }
  }, [dispatch, navigate, user]);

  return {
    register,
    handleSubmit,
    handleRegistration,
    handleGoogleSignIn,
    registerValidation,
    errors,
  };
};
