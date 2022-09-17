import React, { Component } from 'react';
import styles from './searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchString: '',
  };

  textFieldChangeHandler = e => {
    this.setState({ searchString: e.currentTarget.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.onNewQuerySubmit(this.state.searchString);
    this.setState({ searchString: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.submitHandler}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.textFieldChangeHandler}
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchString}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
