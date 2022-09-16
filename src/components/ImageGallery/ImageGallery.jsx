import React from 'react';
import styles from './imageGallery.module.css';

const ImageGallery = ({ images }) => (
  <ul className={styles.ImageGallery}>
    {images.map(image => (
      <li key={image.id}>
        <img alt={image.tags} src={image.previewURL}></img>
      </li>
    ))}
  </ul>
);

export default ImageGallery;
