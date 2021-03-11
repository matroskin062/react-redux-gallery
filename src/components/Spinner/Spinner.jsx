import React from 'react';

const Spinner = () => {
  return (
    <div style={{ textAlign: 'center', width: '100%' }}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        style={{ margin: 'auto', background: '0 0' }}
        width='200'
        height='200'
        display='block'
        preserveAspectRatio='xMidYMid'
        viewBox='0 0 100 100'
      >
        <defs />
        <circle
          cx='50'
          cy='50'
          r='33'
          fill='none'
          stroke='#483d8b'
          strokeDasharray='51.83627878423159 51.83627878423159'
          strokeLinecap='round'
          strokeWidth='5'
        >
          <animateTransform
            attributeName='transform'
            dur='1.3513513513513513s'
            keyTimes='0;1'
            repeatCount='indefinite'
            type='rotate'
            values='0 50 50;360 50 50'
          />
        </circle>
      </svg>
    </div>
  );
};

export default Spinner;
