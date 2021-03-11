import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  clearPhotosListState,
  fetchPhotos,
  loadMore,
} from '../../ducks/photos';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import Spinner from '../Spinner/Spinner';

import ThumbnailPhoto from '../ThumbnailPhoto/ThumbnailPhoto';
import photosSelector from './Photos.selector';

import styles from './PhotosList.module.css';

const PhotosList = ({ albumId }) => {
  const dispatch = useDispatch();
  const { photos, isLoading, isLoadingMore } = useSelector(photosSelector);
  const [page, setPage] = useState(2);

  useEffect(() => {
    dispatch(fetchPhotos(albumId));
    return () => dispatch(clearPhotosListState());
  }, []);

  const handleLoadMore = () => {
    dispatch(loadMore(page, albumId));
    setPage(page + 1);
  };

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && photos && (
        <>
          <div className={styles.PhotosContainer}>
            {photos.map((photo) => (
              <Link to={`/photo/${photo.id}`} key={photo.id}>
                <ThumbnailPhoto url={photo.thumbnailUrl} title={photo.title} />
              </Link>
            ))}
          </div>
          <LoadMoreButton handler={handleLoadMore} isLoading={isLoadingMore} />
        </>
      )}
    </>
  );
};

export default PhotosList;
