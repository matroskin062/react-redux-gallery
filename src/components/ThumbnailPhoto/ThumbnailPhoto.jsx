import React from 'react';
import PropTypes from 'prop-types';

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

ThumbnailPhoto.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ThumbnailPhoto;
