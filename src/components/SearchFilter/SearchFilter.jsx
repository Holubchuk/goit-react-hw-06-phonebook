import css from './SearchFilter.module.css';

export const SearchFilter = ({ filter, handleFilterChange }) => {
  return (
    <div className={css.filterContainer}>
      <p className={css.filterTitle}>Find Profile:</p>
      <input
        value={filter}
        onChange={handleFilterChange}
        type="text"
        name="filter"
        className={css.filterInput}
      />
    </div>
  );
};
