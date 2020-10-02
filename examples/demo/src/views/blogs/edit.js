import React from "react";
import { CLink } from "@kdcsoftware/admin";

const BlogEdit = () => {
  return (
    <div>
      <h1>BlogEdit</h1>
      <CLink className="text-white bg-info px-2" to="/blogs">
        back to list
      </CLink>
    </div>
  );
};

export default BlogEdit;
