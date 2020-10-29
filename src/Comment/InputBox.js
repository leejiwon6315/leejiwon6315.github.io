import React from "react";

const InputBox = ({ name, comment, onChangeComment, onSubmit }) => {
  return (
    <div>
      <div>{name}</div>
      <input
        type="text"
        placeholder="댓글을 입력하세요"
        name="comment"
        value={comment}
        onChange={onChangeComment}
      />

      <button onClick={onSubmit}>입력</button>
    </div>
  );
};

export default InputBox;
