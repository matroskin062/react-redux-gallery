import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchAlbumPhotos } from '../../ducks/album';
import { fetchUser } from '../../ducks/user';
import Spinner from '../Spinner/Spinner';
import albumSelector from './Album.selector';

import User from './User/User';
import PhotosList from '../PhotosList/PhotosList';

const Album = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user, isUserLoading, photos, isAlbumLoading } = useSelector(
    albumSelector
  );

  useEffect(() => {
    dispatch(fetchUser(id));
    dispatch(fetchAlbumPhotos(id));
  }, []);

  return (
    <div>
      {isAlbumLoading && isUserLoading && <Spinner />}
      {!isUserLoading && user && (
        <User username={user.username} name={user.name} email={user.email} />
      )}
      {!isAlbumLoading && <PhotosList photos={photos} />}
    </div>
  );
};

export default Album;