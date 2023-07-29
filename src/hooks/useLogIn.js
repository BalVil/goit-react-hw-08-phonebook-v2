import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { authOperations } from '../redux/auth';

export const useLogIn = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  return {
    register,
    handleSubmit,
    handleLogin,
    logInValidation,
    errors,
  };
};
