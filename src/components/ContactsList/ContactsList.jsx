import css from './ContactsList.module.css';
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(store => store.contacts.contacts);
  const filter = useSelector(store => store.contacts.filter);

  const filteredContacts = contacts.filter(profile =>
    profile.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <ContactsListItem key={contact.id} contacts={contact} />
      ))}
    </ul>
  );
};
