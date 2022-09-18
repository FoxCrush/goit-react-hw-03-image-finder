import React from 'react';
import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onImageClick }) =>
  images.map(image => (
    <li key={image.id} className={styles.ImageGalleryItem}>
      <img
        alt={image.tags}
        src={image.webformatURL}
        className={styles.ImageGalleryItemImage}
        onClick={() => onImageClick(image.largeImageURL)}
      ></img>
    </li>
  ));

export default ImageGalleryItem;
