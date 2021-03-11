import React from 'react';
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';
import styles from './LoadMoreButton.module.css';

const LoadMoreButton = ({ handler, isLoading }) => {
  return !isLoading ? (
    <button className={styles.Button} onClick={handler}>
      Load More
    </button>
  ) : (
    <Spinner />
  );
};

LoadMoreButton.propTypes = {
  handler: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LoadMoreButton;
