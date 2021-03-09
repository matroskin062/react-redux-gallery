import React from 'react';
import PropTypes from 'prop-types';

import styles from './User.module.css';

const User = ({ username, name, email }) => {
  return (
    <div className={styles.User}>
      <h3>{name}</h3>
      <p>Username: {username}</p>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </div>
  );
};

User.propTypes = {
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default User;
