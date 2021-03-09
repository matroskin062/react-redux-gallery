import React from 'react';

import styles from './LoadMoreButton.module.css';

const LoadMoreButton = ({ handler }) => {
  return (
    <button className={styles.Button} onClick={handler}>
      Load More
    </button>
  );
};

export default LoadMoreButton;
