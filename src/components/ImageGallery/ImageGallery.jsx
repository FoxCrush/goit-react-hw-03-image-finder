import React from 'react';
import styles from './imageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={styles.ImageGallery}>
    <ImageGalleryItem images={images} onImageClick={onImageClick} />
  </ul>
);

export default ImageGallery;
