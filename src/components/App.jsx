import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import Modal from './Modal';
import { Fragment } from 'react';

const pxbKey = '23848637-e957cc6ba41a4b75a0e32263e';

class App extends Component {
  state = {
    images: [],
    showModal: false,
  };

  componentDidMount() {
    axios
      .get(
        `https://pixabay.com/api/?q=cat&page=1&key=${pxbKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => this.setState({ images: response.data }));
  }

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
