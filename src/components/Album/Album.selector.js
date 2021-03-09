import { createSelector, createStructuredSelector } from 'reselect';

const userSelector = (state) => state.userReducer;
const albumSelector = (state) => state.albumReducer;

const isAlbumLoadingSelector = createSelector(
  albumSelector,
  ({ isLoading }) => isLoading
);

const albumDataSelector = createSelector(albumSelector, ({ photos }) => photos);

const isUserLoadingSelector = createSelector(
  userSelector,
  ({ isLoading }) => isLoading
);

const userDataSelector = createSelector(userSelector, ({ user }) => user);

const selector = createStructuredSelector({
  user: userDataSelector,
  isUserLoading: isUserLoadingSelector,
  isAlbumLoading: isAlbumLoadingSelector,
  photos: albumDataSelector,
});

export default selector;
