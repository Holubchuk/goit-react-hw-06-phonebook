import { AddContactForm } from './components/AddContactForm/AddContactForm';
import { SearchFilter } from './components/SearchFilter/SearchFilter';
import { ContactsList } from './components/ContactsList/ContactsList';

export const App = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Phonebook</h2>
      <AddContactForm />

      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <SearchFilter />
      <ContactsList />
    </div>
  );
};
