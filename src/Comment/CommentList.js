import React from "react";
import CommentItems from "./CommentItems";

const CommentList = ({ name, list }) => {
  return (
    <div>
      {Object.values(list).map((item) => {
        return <CommentItems name={name} {...item} key={item.id} />;
      })}
    </div>
  );
};

export default CommentList;
