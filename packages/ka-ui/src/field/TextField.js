import React from 'react';

const TextField = ({ record, source }) => {
  return record && record[source] !== undefined ? record[source] : '';
};

export default TextField;
