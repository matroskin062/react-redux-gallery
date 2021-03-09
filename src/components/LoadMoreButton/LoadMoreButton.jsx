import { Button, Row } from 'antd';
import React from 'react';

const LoadMoreButton = ({ handler }) => {
  return (
    <Row justify='center'>
      <Button onClick={handler} size='large'>
        Load More
      </Button>
    </Row>
  );
};

export default LoadMoreButton;
