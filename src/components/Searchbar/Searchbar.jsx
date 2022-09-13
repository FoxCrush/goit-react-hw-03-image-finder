import React from 'react';
import styles from './searchbar.module.css';

const Searchbar = () => (
  <header className={styles.Searchbar}>
    <form className="form">
      <button type="submit" className="button">
        <span className="button-label">Search</span>
      </button>

      <input
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

export default Searchbar;
