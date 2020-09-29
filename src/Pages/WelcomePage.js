import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../styles/WelcomePage.module.scss";

const WelcomePage = ({ name, onChangeName, handleSubmit }) => {
  const history = useHistory();

  const handleEnter = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("이름을 입력해 주세요");
      return;
    } else {
      history.push("/HELLO/" + name);
    }
  };

  return (
    <div className={styles.start_container}>
      <div className={styles.user_start_container}>
        <h1 className={styles.user_sub_title}>WEB-FE WARNING</h1>
        <h1 className={styles.user_title}>HELLO JEEWON'S WORLD!</h1>
        <p className={styles.main_explain}>
          This website is just my portfolio website. If you are curious about
          me, please enter this website. <br />
          There are no viruses or download files on this website, so be assured.{" "}
          Let's enter together now.
        </p>
        <h3 className={styles.user_question}>What is your name?</h3>
        <input
          className={styles.user_input}
          type="text"
          value={name}
          placeholder="Please Write Your Name"
          onChange={onChangeName}
        />
        <button
          className={styles.user_enter_btn}
          onClick={handleEnter}
          onSubmit={handleSubmit}
        >
          Enter The New World
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
