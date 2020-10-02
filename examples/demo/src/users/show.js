import React from "react";
import { Show, SimpleShowLayout, TextField } from "@kdcsoftware/admin";

const UserShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Role" source="role" />
        <TextField label="Status" source="status" />
      </SimpleShowLayout>
    </Show>
  );
};

export default UserShow;
