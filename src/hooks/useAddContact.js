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
    // contactValidation,
  };
};
