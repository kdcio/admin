import React from "react";
import { Admin, Resource } from "@kdcsoftware/admin";

import dataProvider from "./dataProvider";

import { Dashboard } from "./views/dashboard";
import { PostList, PostShow } from "./views/posts";
import { UserCreate, UserEdit, UserList, UserShow } from "./views/users";

const App = () => {
  return (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
      <Resource
        name="posts"
        group="Resources"
        options={{ label: "Posts" }}
        list={PostList}
        show={PostShow}
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
