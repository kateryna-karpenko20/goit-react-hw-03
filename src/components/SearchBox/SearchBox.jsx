import React from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => (
  <div className={css.search}>
    <label>Find contacts by name
      <input 
      className={css.input}
      type="text"
      value={filter}
      onChange={onFilterChange}
      />
      </label>
  </div>
);

export default SearchBox;
