import React from 'react';
import { useRouteContext } from 'ka-core';

const List = (props) => {
  const context = useRouteContext();
  console.log(context);
  return <div>List</div>;
};

export default List;
