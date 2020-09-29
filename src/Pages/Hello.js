import React from "react";
import styles from "../styles/Home.module.scss";

const Hello = ({ name }) => {
  return (
    <div className={styles.hello_container}>
      <h1>hello {name}!</h1>
    </div>
  );
};

export default Hello;
