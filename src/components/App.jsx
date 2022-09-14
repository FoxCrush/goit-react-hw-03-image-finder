import React, { Component } from 'react';
import Searchbar from './Searchbar';
import Modal from './Modal';
import { Fragment } from 'react';

class App extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    return (
      <Fragment>
        <Searchbar />
        {this.state.showModal && <Modal />}
      </Fragment>
    );
  }
}
export default App;
