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

const isLoadingMoreSelector = createSelector(
  photosSelector,
  ({ isLoadingMore }) => isLoadingMore
);
const selector = createStructuredSelector({
  isLoading: isLoadingSelector,
  photos: photosDataSelector,
  isLoadingMore: isLoadingMoreSelector,
});

export default selector;
