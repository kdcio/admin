import React from "react";
import { CLink } from "@kdcsoftware/admin";

const BlogList = () => {
  return (
    <div>
      <h1>BlogList</h1>
      <CLink className="text-white bg-info px-2" to="/blogs/create">
        Create
      </CLink>
      <CLink className="text-white bg-info px-2" to="/blogs/123">
        Edit
      </CLink>
      <CLink className="text-white bg-info px-2" to="/blogs/123/show">
        Show
      </CLink>
    </div>
  );
};

export default BlogList;
