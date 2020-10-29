import React from "react";

const CommentItems = ({ name, comment }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{comment}</p>
    </div>
  );
};

export default CommentItems;
