import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { contactsActions } from 'redux/contacts/contactsSlice';
import { getContacts, getIsLoading } from 'redux/contacts/ContactsSelectors';
import { showWarning, showSuccess } from 'components/Notification/Notification';

export const useAddContact = () => {
  const items = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({ defaultValues: { name: '', number: '' } });

  const contactValidation = {
    name: {
      required: 'Name is required',
      maxLength: 50,
      pattern: {
        value:
          /^[a-zA-Zа-яА-Я0-9]+(([' -][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$/,
        message: 'Invalid name format',
      },
    },
    number: {
      required: 'Number is required',
      pattern: {
        value: /^[0-9]+$/,
        message: 'This is not a valid mobile phone',
      },
      minLength: {
        value: 6,
        message: 'This number is too short',
      },
      maxLength: {
        value: 14,
        message: 'This number is too long',
      },
    },
  };

  const handleAddContact = data => {
    const sameName =
      items.findIndex(
        item => item.name.toLowerCase() === data.name.toLowerCase()
      ) !== -1;

    if (sameName) {
      showWarning(`${data.name} is already in contacts `);
      return;
    }

    dispatch(contactsActions.addContact(data));
  };

  useEffect(() => {
    if (isLoading === 'addSuccess') {
      showSuccess('Contact added');
      reset();
      dispatch(contactsActions.setIsLoading());
    }
  }, [dispatch, isLoading, reset]);

  return {
    register,
    errors,
    control,
    isLoading,
    handleSubmit,
    handleAddContact,
    contactValidation,
  };
};
