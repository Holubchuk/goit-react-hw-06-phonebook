import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/ContactsSlice';
import css from './AddContactForm.module.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts.contacts);

  const [form, setForm] = useState({
    name: '',
    number: '',
  });

  const handleFormChange = event => {
    const { name, value } = event.target;
    setForm(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      name: form.name.toLowerCase(),
      number: form.number,
    };

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
    setForm('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        <span className={css.formLabel}>Name:</span>
        <input
          type="text"
          name="name"
          value={form.name || ''}
          placeholder="Alex"
          onChange={handleFormChange}
          className={css.formInput}
          required
        />
      </label>
      <label>
        <span className={css.formLabel}>Number:</span>
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          max="7"
          name="number"
          value={form.number || ''}
          onChange={handleFormChange}
          placeholder="111-11-11"
          className={css.formInput}
          required
        />
      </label>
      <button type="submit" className={css.formButton}>
        Add Contact
      </button>
    </form>
  );
};
