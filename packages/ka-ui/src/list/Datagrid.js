import React, { useState, useEffect } from 'react';
// import { useListContext } from 'ka-core';
import { CDataTable, CPagination } from '@coreui/react';

const Datagrid = (props) => {
  // const listProps = useListContext();
  const [fields, setFields] = useState([]);
  const page = 1;
  const pageChange = () => {};

  useEffect(() => {
    const { children = [] } = props;
    const fs = [];
    children.forEach((child, idx) => {
      const {
        props: { source, label },
      } = child;
      if (!source && !label) {
        fs.push({ key: idx, label: '' });
      } else {
        fs.push({ key: source, label: label });
      }

      setFields(fs);
    });
  }, [props]);

  return (
    <>
      <CDataTable
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
      />
      <CPagination
        activePage={page}
        onActivePageChange={pageChange}
        pages={5}
        doubleArrows={false}
        align="center"
      />
    </>
  );
};

export default Datagrid;
