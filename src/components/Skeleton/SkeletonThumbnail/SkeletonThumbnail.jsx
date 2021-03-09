import { Card, Skeleton } from 'antd';
import React from 'react';

import styles from './SkeletonThumbnail.module.css';

const SkeletonThumbnail = () => {
  return (
    <div className={styles.Container}>
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <Card
            key={index}
            className={styles.Card}
            bodyStyle={{ padding: '0 24px' }}
          >
            <Skeleton.Image style={{ width: '150px', height: '150px' }} />
            <Skeleton active />
          </Card>
        ))}
    </div>
  );
};

export default SkeletonThumbnail;
