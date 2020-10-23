import React from "react";
import styles from "../styles/Profile.module.scss";
import ProfileImg from "../Images/Profile.jpg";

const Profile = ({ name }) => {
  return (
    <div className={styles.profile_container}>
      <h1 className={styles.profile_title}>JEEWON LEE</h1>
      <div className={styles.profile_top_article}>
        <div className={styles.profile_top_leftPart}></div>
        <img
          className={styles.profile_img}
          src={ProfileImg}
          alt="profile_img"
        />
        <div className={styles.profile_top_rightPart}></div>
      </div>
      <div className={styles.profile_bottom_article}>
        <h1 className={styles.profile_header}>
          Hello {name}! My Name is JEEWON LEE
        </h1>
      </div>
    </div>
  );
};

export default Profile;
