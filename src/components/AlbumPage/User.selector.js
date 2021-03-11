import { createSelector, createStructuredSelector } from 'reselect';

const userSelector = (state) => state.userReducer;

const isLoadingSelector = createSelector(
  userSelector,
  ({ isLoading }) => isLoading
);

const isErrorSelector = createSelector(userSelector, ({ error }) => error);

const userDataSelector = createSelector(userSelector, ({ user }) => user);

const selector = createStructuredSelector({
  isLoading: isLoadingSelector,
  user: userDataSelector,
  error: isErrorSelector,
});

export default selector;
