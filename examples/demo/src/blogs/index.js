import React from "react";

const BlogCreate = React.lazy(() => import("./create"));
const BlogEdit = React.lazy(() => import("./edit"));
const BlogList = React.lazy(() => import("./list"));
const BlogShow = React.lazy(() => import("./show"));

export { BlogCreate, BlogEdit, BlogList, BlogShow };
