import React from "react";

const PostList = React.lazy(() => import("./PostList"));
const PostShow = React.lazy(() => import("./PostShow"));

export { PostList, PostShow };
