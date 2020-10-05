import React from "react";
import { Show, SimpleShowLayout, TextField } from "@kdcsoftware/admin";

const UserShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField label="Name" source="name" />
        <TextField label="Username" source="username" />
        <TextField label="Address 1" source="address.street" />
        <TextField label="Address 2" source="address.suite" />
        <TextField label="City" source="address.city" />
        <TextField label="Zip Code" source="address.zipcode" />
        <TextField label="Latitude" source="address.geo.lat" />
        <TextField label="Longitude" source="address.geo.lng" />
        <TextField label="Email" source="email" />
        <TextField label="Phone" source="phone" />
        <TextField label="Website" source="website" />
      </SimpleShowLayout>
    </Show>
  );
};

export default UserShow;
