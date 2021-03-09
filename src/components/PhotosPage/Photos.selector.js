import { createSelector, createStructuredSelector } from 'reselect';

const photosSelector = (state) => state.photosReducer;

const isLoadingSelector = createSelector(
  photosSelector,
  ({ isLoading }) => isLoading
);

const photosDataSelector = createSelector(
  photosSelector,
  ({ photos }) => photos
);

const selector = createStructuredSelector({
  isLoading: isLoadingSelector,
  photos: photosDataSelector,
});

export default selector;
