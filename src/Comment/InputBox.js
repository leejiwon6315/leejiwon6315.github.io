import React from "react";
import styles from "./CommentStyles/InputBox.module.scss";

const InputBox = ({ name, comment, onChangeComment, onSubmit }) => {
  return (
    <div className={styles.input_box}>
      <div className={styles.input_user_name}>{name}님</div>
      <input
        type="text"
        placeholder="댓글을 입력하세요"
        name="comment"
        value={comment}
        onChange={onChangeComment}
      />

      <button className={styles.input_box_button} onClick={onSubmit}>
        입력
      </button>
    </div>
  );
};

export default InputBox;
