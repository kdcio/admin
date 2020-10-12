import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { useDataContext, DataProvider } from 'ka-core';
import DatagridRow from './DatagridRow';

const Datagrid = (props) => {
  const { status, error, data = [] } = useDataContext();
  const { children = [] } = props;
  // const page = 1;
  // const pageChange = () => {};

  if (status === 'fetching') {
    return <p>Fetching</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          {children.map((child, idx) => {
            const key = idx + 1;
            const { props: childProps } = child;
            const label = childProps.label || childProps.source || '';
            return (
              <th key={key} scope="col">
                {label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {Array.isArray(data) &&
          data.map((row, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <DataProvider key={idx}>
              {cloneElement(
                <DatagridRow />,
                {
                  record: row,
                },
                children
              )}
            </DataProvider>
          ))}
      </tbody>
      {/* <CPagination
        activePage={page}
        onActivePageChange={pageChange}
        pages={5}
        doubleArrows={false}
        align="center"
      /> */}
    </table>
  );
};

Datagrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Datagrid;
