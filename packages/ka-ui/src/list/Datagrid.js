import React from 'react';
// import { useListContext } from 'ka-core';
import { CDataTable, CPagination } from '@coreui/react';

const Datagrid = (props) => {
  // const listProps = useListContext();
  const { children = [] } = props;
  const page = 1;
  const pageChange = () => {};

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
      {/* <CDataTable
        items={[]}
        fields={fields}
        hover
        striped
        itemsPerPage={5}
        activePage={page}
        clickableRows
        onRowClick={(item) => history.push(`/users/${item.id}`)}
        scopedSlots={{
          status: (item) => (
            <td>
              <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
            </td>
          ),
        }}
      /> */}
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
