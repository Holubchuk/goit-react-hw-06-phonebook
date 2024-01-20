import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const handleFilterChange = event => {
    const value = event.target.value;
    setFilter(value);
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

    setContacts([...contacts, finalContacts]);
  };

  const handleDeleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

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
