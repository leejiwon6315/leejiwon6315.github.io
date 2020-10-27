import React from "react";
import styles from "../styles/Profile.module.scss";
import ProfileImg from "../Images/Profile.jpg";

const Profile = ({ name }) => {
  return (
    <div className={styles.profile_container}>
      <h1 className={styles.profile_title}>JEEWON LEE</h1>

      <div className={styles.profile_top_article}>
        <div className={styles.profile_top_leftPart}>
          <span>Web Front-end</span>
          <span>Engineer</span>
        </div>
        <img
          className={styles.profile_img}
          src={ProfileImg}
          alt="profile_img"
        />
        <div className={styles.profile_top_rightPart}>
          <span>Web Designer</span>
        </div>
      </div>
      <div className={styles.profile_bottom_article}>
        <h1 className={styles.profile_header}>
          Hello {name}! This is me.
        </h1>
        <span>-<br/><br/>Personal Profile</span>
        <div className={styles.profile_main_article}>
          <ul>
            <li>Name</li>
            <li>Age</li>
            <li>Position</li>
            <li>Tech Stack<br/><br/><br/></li>
            <li>Major<br/><br/></li>
            
            <li>Location</li>

            <li>E-mail</li>
            <li>Github</li>
          </ul>

          <ul>
            <li>JEEWON LEE</li>
            <li>24</li>
            <li>Web Front-end</li>
            <li>HTML, CSS, Javascript<br/>React js<br/>Photoshop, Illustrator, Figma</li>
            <li>Global Media,<br/>IT College of Soongsil Univ.</li>
            <li>Seoul, Republic Of Korea</li>
            <li>leejiwon6315@naver.com</li>
            <li><a href = "https://github.com/leejiwon6315">github.com/leejiwon6315</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
