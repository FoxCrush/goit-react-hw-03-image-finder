import React, { Component } from 'react';
import Searchbar from './Searchbar';
import Modal from './Modal';
import { Fragment } from 'react';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import imagesApi from '../service/fetch-images-api';
import Button from './Button';

class App extends Component {
  state = {
    images: [],
    showModal: false,
    currentPage: 1,
    currentQuery: '',
    isLoading: false,
    currentImage: '',
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
      this.setState({ isLoading: true });
      imagesApi
        .fetchImages(apiOptions)
        .then(images =>
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
            currentPage: prevState.currentPage + 1,
          }))
        )
        .finally(() => this.setState({ isLoading: false }))
        .catch(error => {
          alert(error.message);
        });
    }
  };

  onLoadMoreButtonClick = () => {
    this.fetchImages();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onImageClick = currentImage => {
    this.setState({ currentImage: currentImage, showModal: true });
  };

  render() {
    const { showModal, images, isLoading, currentImage } = this.state;
    return (
      <Fragment>
        <Searchbar onNewQuerySubmit={this.onQueryChange} />
        {showModal && (
          <Modal onClose={this.toggleModal} imageToShow={currentImage} />
        )}
        <ImageGallery images={images} onImageClick={this.onImageClick} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onButtonClicked={this.onLoadMoreButtonClick} />
        )}
      </Fragment>
    );
  }
}
export default App;
