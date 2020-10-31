import React, { useState } from "react";
import styles from "./PageStyles/CommentsPage.module.scss";
import { dataBase, nextId, setNextId } from "../data/dataBase";
import useInput from "../Hooks/useInput";
import CommentList from "../Comment/CommentList";
import InputBox from "../Comment/InputBox";

const Comments = ({ name }) => {
  const [data, setData] = useState(dataBase);
  const [comment, setComment, onChangeComment] = useInput("");

  const onSubmitComment = () => {
    if (comment === "") {
      alert("코멘트를 입력해주세요!");
      return;
    }

    setData({
      ...data,
      [nextId]: {
        id: String(nextId),
        comment,
      },
    });

    setComment("");
    setNextId();
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmitComment();
    }
  };

  return (
    <div className={styles.comments_container}>
      <div className={styles.comments_list}>
        <CommentList name={name} list={data} />
      </div>
      <InputBox
        name={name}
        comment={comment}
        onChangeComment={onChangeComment}
        onSubmit={onSubmitComment}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default Comments;
