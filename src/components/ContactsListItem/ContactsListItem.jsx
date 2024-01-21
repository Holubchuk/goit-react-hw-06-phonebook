import { useDispatch } from 'react-redux';
import css from './ContactsListItem.module.css';
import { deleteContact } from '../../redux/contacts/ContactsSlice';

export const ContactsListItem = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactListItem}>
      {contacts.name}: {contacts.number}
      <button
        onClick={() => dispatch(deleteContact(contacts.id))}
        className={css.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};
