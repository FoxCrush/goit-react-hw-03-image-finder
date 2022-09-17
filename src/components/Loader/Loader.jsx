import { InfinitySpin } from 'react-loader-spinner';
import React from 'react';
import styles from './loader.module.css';

const Loader = () => (
  <div className={styles.loaderContainer}>
    <InfinitySpin width="200" color="#4fa94d" />
  </div>
);

export default Loader;
