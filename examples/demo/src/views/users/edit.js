import React from "react";
import { Edit, SimpleForm, TextInput } from "@kdcsoftware/admin";

const UserEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Username" source="username" />
        <TextInput label="Address 1" source="address.street" />
        <TextInput label="Address 2" source="address.suite" />
        <TextInput label="City" source="address.city" />
        <TextInput label="Zip Code" source="address.zipcode" />
        <TextInput label="Latitude" source="address.geo.lat" />
        <TextInput label="Longitude" source="address.geo.lng" />
        <TextInput label="Email" source="email" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="Website" source="website" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
