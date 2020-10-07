import React from "react";
import { Show, SimpleShowLayout, TextField } from "@kdcsoftware/admin";

const UserShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField label="UserId" source="userId" />
        <TextField label="Title" source="title" />
        <TextField label="Body" source="body" />
      </SimpleShowLayout>
    </Show>
  );
};

export default UserShow;
