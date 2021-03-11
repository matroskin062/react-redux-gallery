import { createSelector, createStructuredSelector } from 'reselect';

const photoSelector = (state) => state.photoReducer;

const isLoadingSelector = createSelector(
  photoSelector,
  ({ isLoading }) => isLoading
);

const isErrorSelector = createSelector(photoSelector, ({ error }) => error);

const photoDataSelector = createSelector(photoSelector, ({ photo }) => photo);

const selector = createStructuredSelector({
  isLoading: isLoadingSelector,
  photo: photoDataSelector,
  error: isErrorSelector,
});

export default selector;
