import React from "react";
import { Create, SimpleForm, TextInput } from "@kdcsoftware/admin";

const UserCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Registered" source="registered" />
        <TextInput label="Role" source="role" />
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
