import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { clearUserState, fetchUser } from '../../ducks/user';
import Spinner from '../Spinner/Spinner';
import userSelector from './User.selector.js';
import User from './User/User';
import PhotosList from '../PhotosList/PhotosList';
import NotFound from '../NotFound/NotFound';

const AlbumPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector(userSelector);

  useEffect(() => {
    dispatch(fetchUser(id));
    return () => dispatch(clearUserState());
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}
      {error && <NotFound />}
      {!isLoading && user && (
        <>
          <User username={user.username} name={user.name} email={user.email} />
          <PhotosList albumId={id} />
        </>
      )}
    </div>
  );
};

export default AlbumPage;
