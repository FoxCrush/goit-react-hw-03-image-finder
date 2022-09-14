import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';

const modalRoot = document.querySelector('#root-modal');

class Modal extends Component {
  render() {
    return createPortal(
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          {this.props.children}
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
