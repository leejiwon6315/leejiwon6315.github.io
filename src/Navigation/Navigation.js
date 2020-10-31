import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import Logo from "../Images/logo.png";

const Navigaion = ({ name }) => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav_contents}>
        <div className={styles.content_front}>
          <div className={styles.logo}>
            <img className={styles.logo_image} src={Logo} alt="logo_img" />

            <h1 className={styles.title}>JEEWON'S WORLD</h1>
          </div>
          <div className={styles.nav_items}>
            <Link to={`/HELLO/${name}`} className={styles.nav_item}>
              Profile
            </Link>
            <Link to={`/HELLO/My_Works`} className={styles.nav_item}>
              My Works
            </Link>
            <Link to={`/HELLO/${name}'s_comments`} className={styles.nav_item}>
              Comments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigaion;
