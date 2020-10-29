import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../PageStyles/WelcomePage.module.scss";

const WelcomePage = ({ name, setName, onChangeName }) => {
  const history = useHistory();

  const handleEnter = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("이름을 입력해 주세요");
      return;
    } else {
      history.push("/HELLO/" + name);
    }

    setName(name);
  };

  return (
    <div className={styles.start_container}>
      <div className={styles.user_start_container}>
        <h1 className={styles.user_sub_title}>WEB-FE WARNING</h1>
        <h1 className={styles.user_title}>HELLO JEEWON'S WORLD!</h1>
        <p className={styles.main_explain}>
          This website is just my portfolio website. If you are curious about
          me, please enter this website. <br />
          There are no viruses or download files on this website, so be assured.
          Let's enter together now!
        </p>
        <p className={styles.main_explain}>
          이 웹사이트는 저의 포트폴리오 웹사이트 입니다. 저에 대해 궁금하시다면,
          이 웹사이트에 접속해 주세요. <br />
          바이러스 혹은 그에 준하는 파일이 다운로드되거나 하지 않으니
          안심하세요. 그럼 함께 접속해 봅시다!
        </p>
        <h3 className={styles.user_question}> What is your name?</h3>
        <input
          className={styles.user_input}
          type="text"
          value={name}
          placeholder="Please Write Your Name"
          onChange={onChangeName}
        />
        <button className={styles.user_enter_btn} onClick={handleEnter}>
          Enter The New World
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
