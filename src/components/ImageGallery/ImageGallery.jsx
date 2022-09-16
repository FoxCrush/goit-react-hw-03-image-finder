import React from 'react';
import styles from './imageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images }) => (
  <ul className={styles.ImageGallery}>
    <ImageGalleryItem images={images} />
  </ul>
);

export default ImageGallery;
