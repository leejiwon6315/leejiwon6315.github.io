import React from "react";
import CommentItems from "./CommentItems";
import styles from "./CommentStyles/CommentList.module.scss";

const CommentList = ({ name, list }) => {
  return (
    <div className={styles.comment_list_inside}>
      {Object.values(list).map((item) => {
        return <CommentItems name={name} {...item} key={item.id} />;
      })}
    </div>
  );
};

export default CommentList;
