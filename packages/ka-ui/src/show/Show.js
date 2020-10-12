import React from 'react';
import PropTypes from 'prop-types';
import { ShowContextProvider, DataProvider } from 'ka-core';

const Show = (props) => {
  const { children } = props;

  return (
    <ShowContextProvider>
      <DataProvider>{children}</DataProvider>
    </ShowContextProvider>
  );
};

Show.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Show;
