import React from "react";
import { Admin, Resource } from "@kdcsoftware/admin";

import { Dashboard } from "./views/dashboard";
import { BlogCreate, BlogEdit, BlogList, BlogShow } from "./views/blogs";
import { UserCreate, UserEdit, UserList, UserShow } from "./views/users";

const App = () => {
  return (
    <Admin dashboard={Dashboard}>
      <Resource
        name="blogs"
        group="Resources"
        options={{ label: "Blogs" }}
        list={BlogList}
        edit={BlogEdit}
        create={BlogCreate}
        show={BlogShow}
        icon="cil-pencil"
      />
      <Resource
        name="users"
        group="System"
        options={{ label: "Users" }}
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
        show={UserShow}
        icon="cil-people"
      />
    </Admin>
  );
};

export default App;
