import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';

const modalRoot = document.querySelector('#root-modal');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscButton);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscButton);
  }
  handleEscButton = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>
          <img src={this.props.imageToShow} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
