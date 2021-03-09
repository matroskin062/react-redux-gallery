import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchAlbumPhotos, fetchMoreAlbumPhotos } from '../../ducks/album';
import { fetchUser } from '../../ducks/user';
import Spinner from '../Spinner/Spinner';
import albumSelector from './Album.selector';

import User from './User/User';
import PhotosList from '../PhotosList/PhotosList';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

const AlbumPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);
  const { user, isUserLoading, photos, isAlbumLoading } = useSelector(
    albumSelector
  );

  useEffect(() => {
    dispatch(fetchUser(id));
    dispatch(fetchAlbumPhotos(id));
  }, []);

  const handleLoadMore = () => {
    dispatch(fetchMoreAlbumPhotos(id, page));
    setPage(page + 1);
  };

  return (
    <div>
      {isAlbumLoading && isUserLoading && <Spinner />}
      {!isUserLoading && user && (
        <User username={user.username} name={user.name} email={user.email} />
      )}
      {!isAlbumLoading && (
        <>
          <PhotosList photos={photos} />
          <LoadMoreButton handler={handleLoadMore} />
        </>
      )}
    </div>
  );
};

export default AlbumPage;