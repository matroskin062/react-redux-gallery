import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { clearPhotoDetailsState, fetchPhoto } from '../../ducks/photoDetails';
import NotFound from '../NotFound/NotFound';
import PageTitle from '../PageTitle/PageTitle';
import Spinner from '../Spinner/Spinner';

import styles from './PhotoDetails.module.css';
import photoSelector from './PhotoDetails.selector';

const PhotoDetailsPage = () => {
  const dispatch = useDispatch();
  const { photo, isLoading, error } = useSelector(photoSelector);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPhoto(id));
    return () => dispatch(clearPhotoDetailsState());
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <NotFound />}
      {!isLoading && photo && (
        <>
          <PageTitle>Photo with id: {id}</PageTitle>
          <div className={styles.Details}>
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
          </div>
        </>
      )}
    </>
  );
};

export default PhotoDetailsPage;
