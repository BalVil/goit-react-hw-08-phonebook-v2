import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem';
import { useContactList } from 'hooks/useContactList';
import { getIsLoading } from 'redux/contacts/ContactsSelectors';
import { Notification } from 'components/Notification/Notification';
import Filter from 'components/Filter';
import { SkeletonContacts } from 'components/Skeleton/Skeleton';
import { ListSection, ListWrap } from './ContactList.styled';

const ContactList = () => {
  const { FilteredContacts, filter, setFilter } = useContactList();
  const isLoading = useSelector(getIsLoading);

  const noContactFound = FilteredContacts.length === 0 && isLoading !== 'fetch';

  return (
    <ListSection>
      <h2>Contacts</h2>
      <ListWrap>
        {isLoading === 'fetch' ? (
          <SkeletonContacts />
        ) : (
          <>
            <Filter value={filter} onChange={setFilter} />
            <ul>
              {FilteredContacts.length > 0 &&
                FilteredContacts.map(({ id, name, number }) => {
                  return (
                    <ContactItem
                      key={id}
                      name={name}
                      number={number}
                      id={id}
                    ></ContactItem>
                  );
                })}
            </ul>
          </>
        )}
        {noContactFound && (
          <Notification status="warning">No contacts found</Notification>
        )}
      </ListWrap>
    </ListSection>
  );
};
export default ContactList;
