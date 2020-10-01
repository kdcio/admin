import React, { cloneElement } from 'react';
import { useListContext } from 'ka-core';
import DatagridRow from './DatagridRow';

const Datagrid = (props) => {
  const { data = [] } = useListContext();
  const { children = [] } = props;
  // const page = 1;
  // const pageChange = () => {};

  return (
    <table className="table">
      <thead>
        <tr>
          {children.map((child, idx) => {
            let {
              props: { source, label },
            } = child;
            if (!source && !label) {
              label = '';
            } else if (!label) {
              label = source;
            }

            return (
              <th key={idx} scope="col">
                {label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) =>
          cloneElement(
            <DatagridRow />,
            {
              key: idx,
              record: row,
              rowIndex: idx,
            },
            children
          )
        )}
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

export default Datagrid;
