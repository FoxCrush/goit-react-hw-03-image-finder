import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import Modal from './Modal';
import { Fragment } from 'react';
import ImageGallery from './ImageGallery';
import Loader from './Loader';

axios.defaults.baseURL = 'https://pixabay.com';

const pxbKey = '23848637-e957cc6ba41a4b75a0e32263e';

class App extends Component {
  state = {
    images: [],
    showModal: false,
  };

  componentDidMount() {}

  onQueryChange = q => {
    axios
      .get(
        `/api/?q=${q}&page=1&key=${pxbKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => this.setState({ images: response.data.hits }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { showModal, images } = this.state;
    return (
      <Fragment>
        <Searchbar onNewQuerySubmit={this.onQueryChange} />
        {showModal && <Modal onClose={this.toggleModal} />}
        <ImageGallery images={images} />
        <Loader />
      </Fragment>
    );
  }
}
export default App;
