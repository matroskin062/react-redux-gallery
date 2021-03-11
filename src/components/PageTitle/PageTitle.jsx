import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({ children }) => {
  return (
    <div style={{ margin: '5px 0px 10px' }}>
      <h1>{children}</h1>
    </div>
  );
};

PageTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default PageTitle;
