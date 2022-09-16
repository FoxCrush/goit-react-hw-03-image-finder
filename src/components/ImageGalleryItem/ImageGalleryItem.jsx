import React from 'react';
import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ images }) =>
  images.map(image => (
    <li key={image.id} className={styles.ImageGalleryItem}>
      <img
        alt={image.tags}
        src={image.previewURL}
        className={styles.ImageGalleryItemImage}
      ></img>
    </li>
  ));

export default ImageGalleryItem;
