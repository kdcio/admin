import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  EditButton,
} from "@kdcsoftware/admin";

const UserList = () => {
  return (
    <List>
      <Datagrid>
        <TextField label="ID" source="id" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Status" source="status" />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default UserList;
