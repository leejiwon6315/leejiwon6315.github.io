import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigaion = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav_contents}>
        <div className={styles.content_front}>
          <div className={styles.logo}>
            <div className={styles.logo_image}></div>
            <h1 className={styles.title}>Hello JEEWON'S WORLD</h1>
          </div>
          <div className={styles.nav_items}>
            <Link to="/Home" className={styles.nav_item}>
              Home
            </Link>
            <Link to="/Comments" className={styles.nav_item}>
              Comments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigaion;
