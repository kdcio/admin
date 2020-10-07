import React from "react";

const PostList = React.lazy(() => import("./list"));
const PostShow = React.lazy(() => import("./show"));

export { PostList, PostShow };
