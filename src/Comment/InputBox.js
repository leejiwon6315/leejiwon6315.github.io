import React from "react";
import styles from "./CommentStyles/InputBox.module.scss";

const InputBox = ({ name, comment, onChangeComment, onKeyPress, onSubmit }) => {
  return (
    <div className={styles.input_box}>
      <div className={styles.input_user_name}>{name}님</div>
      <input
        type="text"
        placeholder="코멘트를 남겨주세요"
        name="comment"
        value={comment}
        onChange={onChangeComment}
        onKeyPress={onKeyPress}
      />

      <button className={styles.input_box_button} onClick={onSubmit}>
        입력
      </button>
    </div>
  );
};

export default InputBox;
