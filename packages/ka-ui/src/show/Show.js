import React from 'react';
import { ShowContextProvider } from 'ka-core';

const Show = (props) => {
  const { children, ...showProps } = props;

  return <ShowContextProvider {...showProps}>{children}</ShowContextProvider>;
};

export default Show;
