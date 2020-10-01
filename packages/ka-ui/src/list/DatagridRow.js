import React, { cloneElement } from 'react';

const DatagridRow = ({ record, rowIndex, children }) => {
  return (
    <tr key={rowIndex}>
      {children.map((child, idx) => {
        return idx === 0 ? (
          <th key={idx} scope="row">
            {cloneElement(child, { record })}
          </th>
        ) : (
          <td key={idx}>{cloneElement(child, { record })}</td>
        );
      })}
    </tr>
  );
};

export default DatagridRow;
