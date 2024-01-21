import { useState } from 'react';
import { setFilter } from '../../redux/contacts/ContactsSlice';
import css from './SearchFilter.module.css';
import { useDispatch } from 'react-redux';

export const SearchFilter = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    const value = e.target.value;
    setInputValue(value);
    dispatch(setFilter(value));
  };

  return (
    <div className={css.filterContainer}>
      <p className={css.filterTitle}>Find Profile:</p>
      <input
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        name="filter"
        className={css.filterInput}
      />
    </div>
  );
};
