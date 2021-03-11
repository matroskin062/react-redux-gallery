import React from 'react';
import Spinner from '../Spinner/Spinner';

import styles from './LoadMoreButton.module.css';

const LoadMoreButton = ({ handler, isLoading }) => {
  return !isLoading ? (
    <button className={styles.Button} onClick={handler}>
      Load More
    </button>
  ) : (
    <Spinner />
  );
};

export default LoadMoreButton;
