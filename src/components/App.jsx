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
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <span>Test modal messege</span>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              officiis in molestiae commodi sint minima harum aperiam. Ipsam,
              quisquam iste! Ex perferendis itaque in adipisci ea minima quos
              quas nesciunt!
            </span>
          </Modal>
        )}
      </Fragment>
    );
  }
}
export default App;
