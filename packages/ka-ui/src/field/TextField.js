import React from 'react';
import get from 'lodash.get';

const TextField = ({ record, source, defaultValue = '' }) => {
  return get(record, source, defaultValue);
};

export default TextField;
