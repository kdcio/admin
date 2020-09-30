import React from "react";

const UserCreate = React.lazy(() => import("./create"));
const UserEdit = React.lazy(() => import("./edit"));
const UserList = React.lazy(() => import("./list"));
const UserShow = React.lazy(() => import("./show"));

export { UserCreate, UserEdit, UserList, UserShow };
