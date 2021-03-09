import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos, loadMore } from '../../ducks/photos';
import PhotosList from '../PhotosList/PhotosList';
import Spinner from '../Spinner/Spinner';
import styles from './Photos.module.css';
import photosSelector from './Photos.selector';
import PropTypes from 'prop-types';

const Photos = () => {
  const dispatch = useDispatch();
  const { photos, isLoading } = useSelector(photosSelector);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  const handleLoadMore = () => {
    dispatch(loadMore(page + 1));
    setPage(page + 1);
  };

  const renderPhotosList = (
    <>
      <PhotosList photos={photos} />
      <button className={styles.Button} onClick={handleLoadMore}>
        Load more...
      </button>
    </>
  );

  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && renderPhotosList}
    </div>
  );
};

export default Photos;
