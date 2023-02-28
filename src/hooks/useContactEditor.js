import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/ContactsSelectors';
import { showWarning } from 'components/Notification/Notification';
import { contactsActions } from 'redux/contacts/contactsSlice';

export const useContactEditor = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const items = useSelector(getContacts);

  const { name, number } = items.find(item => item.id === id);
  const [inputs, setInputs] = useState({ name, number });

  const prevName = items.reduce((acc, contact) => {
    if (contact.id === id) {
      acc = contact.name;
    }
    return acc;
  }, {});

  const handleChange = e => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [nameInput]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // const reg = new RegExp(
    //   /^(\+\d\s*)?(\d{3,4}|\(\d{3,4}\))[-\s]?\d{3}[-\s]?\d{4}$/
    // );
    // let result = reg.test(inputs.number);
    // console.log(result);
    // if (!result) {
    //   return;
    // }

    // має перевіряти бекенд
    const sameName =
      items.findIndex(
        item => item.name.toLowerCase() === inputs.name.toLowerCase()
      ) !== -1;

    if (sameName && prevName !== inputs.name) {
      showWarning(`${inputs.name} is already in contacts `);
      return;
    }

    const isContactChanged =
      inputs.name.trim() !== name || inputs.number !== number;

    if (isContactChanged) {
      dispatch(
        contactsActions.editContact({
          id,
          ...inputs,
        })
      );
    }

    onClose();
  };

  return { inputs, handleSubmit, handleChange };
};
