import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos, loadMore } from '../../ducks/photos';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import PhotosList from '../PhotosList/PhotosList';
import SkeletonThumbnail from '../Skeleton/SkeletonThumbnail/SkeletonThumbnail';
import photosSelector from './Photos.selector';

const PhotosPage = () => {
  const dispatch = useDispatch();
  const { photos, isLoading } = useSelector(photosSelector);
  const [page, setPage] = useState(2);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  const handleLoadMore = () => {
    dispatch(loadMore(page));
    setPage(page + 1);
  };

  return (
    <div>
      {isLoading && <SkeletonThumbnail />}
      {!isLoading && photos && (
        <>
          <PhotosList photos={photos} />
          <LoadMoreButton handler={handleLoadMore} />
        </>
      )}
    </div>
  );
};

export default PhotosPage;
