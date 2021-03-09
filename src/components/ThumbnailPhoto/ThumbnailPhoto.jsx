import React from 'react';
import PropTypes from 'prop-types';

import styles from './ThumbnailPhoto.module.css';
import { Card, Typography } from 'antd';
const { Meta } = Card;

const ThumbnailPhoto = ({ url, title }) => {
  return (
    <Card
      cover={<img src={url} alt={title} />}
      hoverable
      className={styles.Card}
    >
      <Meta title={<Typography className={styles.Title}>{title}</Typography>} />
    </Card>
  );
};

ThumbnailPhoto.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ThumbnailPhoto;
