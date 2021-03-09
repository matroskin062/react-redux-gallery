import React from 'react';

import spinner from '../../assets/spinner.svg';

const Spinner = () => {
  return (
    <div style={{ textAlign: 'center', width: '100%' }}>
      <img src={spinner} alt='' />
    </div>
  );
};

export default Spinner;
