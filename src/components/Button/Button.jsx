import React, { Component } from 'react';
import styles from './button.module.css';

export default class Button extends Component {
  render() {
    return (
      <button
        className={styles.Button}
        type="button"
        onClick={this.props.onButtonClicked}
      >
        Load more
      </button>
    );
  }
}
