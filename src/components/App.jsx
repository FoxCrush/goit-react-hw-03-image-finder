import React, { Component } from 'react';
import Searchbar from './Searchbar';
import Modal from './Modal';
import { Fragment } from 'react';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import imagesApi from '../service/fetch-images-api';

class App extends Component {
  state = {
    images: [],
    showModal: false,
    currentPage: 1,
    currentQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentQuery !== this.state.currentQuery) {
      this.fetchImages();
    }
  }

  onQueryChange = q => {
    this.setState({ currentQuery: q, images: [], currentPage: 1 });
  };

  fetchImages = () => {
    const { currentQuery, currentPage } = this.state;
    const apiOptions = {
      currentQuery,
      currentPage,
    };

    if (currentQuery.length > 0) {
      imagesApi.fetchImages(apiOptions).then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }))
      );
    }
  };

  onLoadMoreButtonClick = () => {
    this.fetchImages();
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
        <button type="button" onClick={this.onLoadMoreButtonClick}>
          Load more
        </button>
        <Loader />
      </Fragment>
    );
  }
}
export default App;
