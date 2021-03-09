import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPhotos, loadMore } from '../../ducks/photos';
import ThumbnailPhoto from '../ThumbnailPhoto/ThumbnailPhoto';
import styles from './Photos.module.css';

const Photos = () => {
  const dispatch = useDispatch();
  const { photos, isLoading } = useSelector((state) => state.photosReducer);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  const handleLoadMore = () => {
    dispatch(loadMore(page + 1));
    setPage(page + 1);
  };

  const renderPhtosContainer = (
    <>
      <div className={styles.PhotosContainer}>
        {photos.map((photo) => (
          <Link to={`/photo/${photo.id}`} key={photo.id}>
            <ThumbnailPhoto url={photo.thumbnailUrl} title={photo.title} />
          </Link>
        ))}
      </div>
      <button onClick={handleLoadMore}>Load more...</button>
    </>
  );

  return (
    <div className={styles.Wrapper}>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && photos && renderPhtosContainer}
    </div>
  );
};

export default Photos;
