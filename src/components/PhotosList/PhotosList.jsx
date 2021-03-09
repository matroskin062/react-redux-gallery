import React from 'react';
import { Link } from 'react-router-dom';
import ThumbnailPhoto from '../ThumbnailPhoto/ThumbnailPhoto';

import styles from './PhotosList.module.css';
const PhotosList = ({ photos }) => {
  return (
    <div className={styles.PhotosContainer}>
      {photos.map((photo) => (
        <Link to={`/photo/${photo.id}`} key={photo.id}>
          <ThumbnailPhoto url={photo.thumbnailUrl} title={photo.title} />
        </Link>
      ))}
    </div>
  );
};

export default PhotosList;
