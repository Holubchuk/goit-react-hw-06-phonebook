import css from './ContactsListItem.module.css';

export const ContactsListItem = ({ contacts, handleDeleteContact }) => {
  return (
    <li className={css.contactListItem}>
      {contacts.name}: {contacts.number}
      <button
        onClick={() => handleDeleteContact(contacts.id)}
        className={css.deleteButton}>
        Delete
      </button>
    </li>
  );
};
