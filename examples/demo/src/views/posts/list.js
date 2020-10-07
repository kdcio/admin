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
        <TextField label="Title" source="title" />
        <TextField label="UserId" source="userId" />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default UserList;
