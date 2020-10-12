/* eslint-disable react/no-array-index-key */
import React, { cloneElement, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useData } from 'ka-core';

const DatagridRow = ({ record, children }) => {
  const { setData } = useData();
  useEffect(() => {
    setData(record);
  }, [record]);

  return (
    <tr>
      {children.map((child, idx) => {
        return idx === 0 ? (
          <th key={idx} scope="row">
            {cloneElement(child)}
          </th>
        ) : (
          <td key={idx}>{cloneElement(child)}</td>
        );
      })}
    </tr>
  );
};

DatagridRow.propTypes = {
  record: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

DatagridRow.defaultProps = {
  record: {},
  children: [],
};

export default DatagridRow;
