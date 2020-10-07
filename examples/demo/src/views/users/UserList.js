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
        <TextField label="Name" source="name" />
        <TextField label="Username" source="username" />
        <TextField label="Email" source="email" />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default UserList;
