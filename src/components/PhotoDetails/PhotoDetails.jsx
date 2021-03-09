import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchPhoto } from '../../ducks/photoDetails';
import Spinner from '../Spinner/Spinner';

import styles from './PhotoDetails.module.css';
import photoSelector from './PhotoDetails.selector';

const PhotoDetails = () => {
  const dispatch = useDispatch();
  const { photo, isLoading } = useSelector(photoSelector);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPhoto(id));
  }, []);

  return (
    <div className={styles.Details}>
      {isLoading && <Spinner />}
      {!isLoading && photo && (
        <>
          <div>
            <img src={photo.url} alt={photo.title} />
          </div>
          <div>
            <p>{photo.title}</p>
            <p>
              Album:{' '}
              <Link to={`/album/${photo.album.id}`}>{photo.album.title}</Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default PhotoDetails;
