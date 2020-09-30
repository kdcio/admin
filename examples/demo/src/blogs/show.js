import React from "react";
import { CLink } from "@kdcsoftware/admin";

const BlogShow = () => {
  return (
    <div>
      <h1>BlogShow</h1>
      <CLink className="text-white bg-info px-2" to="/blogs">
        back to list
      </CLink>
    </div>
  );
};

export default BlogShow;
