import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  getIsLoading,
  getError,
} from 'redux/contacts/ContactsSelectors';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import { showSuccess, showError } from 'components/Notification/Notification';
import { contactsActions } from 'redux/contacts/contactsSlice';

export const useContactList = () => {
  const [filter, setFilter] = useState('');
  const items = useSelector(getContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  useEffect(() => {
    if (isLoading === 'editSuccess') {
      showSuccess(`Successfully changed`);
      dispatch(contactsActions.setIsLoading());
    }
    if (error) {
      showError('Oops, something went wrong. Please try again');
    }
  }, [dispatch, isLoading, error]);

  const FilteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase().trim();

    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }, [filter, items]);

  return { FilteredContacts, filter, setFilter };
};
