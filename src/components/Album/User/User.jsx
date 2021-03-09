import React from 'react';

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

export default User;
