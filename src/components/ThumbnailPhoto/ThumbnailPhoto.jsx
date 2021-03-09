import React from 'react';

import styles from './ThumbnailPhoto.module.css';

const ThumbnailPhoto = ({ url, title }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Image}>
        <img src={url} alt={title} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default ThumbnailPhoto;
