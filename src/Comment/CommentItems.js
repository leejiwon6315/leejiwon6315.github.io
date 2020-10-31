import React from "react";
import styles from "./CommentStyles/CommentItems.module.scss";

const CommentItems = ({ name, comment }) => {
  return (
    <div className={styles.input_item_container}>
      <div className={styles.input_item}>
        <h1 className={styles.input_item_user_name}>{name}님의 코멘트</h1>
        <p className={styles.input_item_user_text}>{comment}</p>
      </div>
    </div>
  );
};

export default CommentItems;
