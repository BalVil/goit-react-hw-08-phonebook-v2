import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Contact, ContactName, ContactNumber } from './ContactItem.styled';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import { getIsLoading } from 'redux/contacts/ContactsSelectors';
import { showWarning } from 'components/Notification/Notification';
import EditContactModal from 'components/Modal';
import { contactsActions } from 'redux/contacts/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  const handleDeleteContact = contactId => {
    dispatch(contactsOperations.deleteContact(contactId));
  };

  useEffect(() => {
    return () => {
      if (isLoading === id) {
        showWarning(`You have removed ${name} from your list `);
        dispatch(contactsActions.setIsLoading());
      }
    };
  }, [dispatch, id, isLoading, name]);

  return (
    <Contact>
      <ContactName>{name}:</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <IconButton
        sx={{
          position: 'absolute',
          right: '15%',
          '&:hover, &:focus': { bgcolor: '#d7f0d0', color: '#468d46' },
        }}
        aria-label="edit"
        type="button"
        onClick={toggleModal}
      >
        <ModeEditIcon />
      </IconButton>
      <IconButton
        sx={{
          position: 'absolute',
          right: '2%',
          '&:hover, &:focus': { bgcolor: '#f3dacf', color: '#d31616' },
        }}
        aria-label="delete"
        type="button"
        disabled={isLoading === id}
        loading={isLoading === id ? 1 : 0}
        onClick={() => handleDeleteContact(id)}
      >
        <DeleteIcon />
      </IconButton>
      {isModalOpen && <EditContactModal onClose={toggleModal} id={id} />}
    </Contact>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
