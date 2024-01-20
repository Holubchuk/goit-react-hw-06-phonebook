import css from './ContactsList.module.css';
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';

export const ContactsList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <ContactsListItem
          key={contact.id}
          contacts={contact}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};
