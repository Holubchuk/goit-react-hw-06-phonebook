import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { AddContactForm } from './components/AddContactForm/AddContactForm';
import { SearchFilter } from './components/SearchFilter/SearchFilter';
import { ContactsList } from './components/ContactsList/ContactsList';

import {
  addContact,
  deleteContact,
  setFilter,
} from './redux/contacts/ContactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts.contacts);
  const filter = useSelector(store => store.contacts.filter);

  const handleFilterChange = event => {
    const value = event.target.value;
    dispatch(setFilter(value));
  };

  const handleAddContact = formData => {
    const hasDuplicates = contacts.some(
      contact => contact.name === formData.name
    );
    if (hasDuplicates) {
      alert(`Profile with name ${formData.name} already exists!`);
      return;
    }
    const finalContacts = {
      ...formData,
      id: nanoid(),
    };

    dispatch(addContact(finalContacts));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(profile =>
    profile.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Phonebook</h2>
      <AddContactForm handleAddContact={handleAddContact} />

      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <SearchFilter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactsList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
