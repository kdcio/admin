import React from "react";
import { Edit, SimpleForm, TextInput } from "@kdcsoftware/admin";

const UserEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput label="ID" source="id" readOnly />
        <TextInput label="Name" source="name" />
        <TextInput label="Registered" source="registered" />
        <TextInput label="Role" source="role" />
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
