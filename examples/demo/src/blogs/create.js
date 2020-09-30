import React from "react";
import { CLink } from "@kdcsoftware/admin";

const BlogCreate = () => {
  return (
    <div>
      <h1>BlogCreate</h1>
      <CLink className="text-white bg-info px-2" to="/blogs">
        back to list
      </CLink>
    </div>
  );
};

export default BlogCreate;
