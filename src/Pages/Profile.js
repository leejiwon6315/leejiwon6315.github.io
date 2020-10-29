import React from "react";
import styles from "../PageStyles/ProfilePage.module.scss";
import ProfileImg from "../Images/Profile.jpg";

const Profile = ({ name }) => {
  return (
    <div className={styles.profile_container}>
      <h1 className={styles.profile_title}>JEEWON LEE</h1>

      <div className={styles.profile_top}>
        <div className={styles.profile_top_section}>
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

        <h1 className={styles.profile_introduce}>
          Hello {name}.<br />
          Welcome to the JEEWON'S WORLD!
          <br />
          <br />
          Let me introduce myself
          <br />
          through this website.
          <br />
        </h1>
      </div>

      <div className={styles.profile_bottom}>
        <div className={styles.profile_bottom_section}>
          <span>
            <br />
            Personal Profile
          </span>
          <div className={styles.profile_bottom_article}>
            <ul className={styles.profile_left_subtitle}>
              <li>Name</li>
              <li>Age</li>
              <li>Position</li>
              <li>
                Tech Stack
                <br />
                <br />
                <br />
              </li>
              <li>Location</li>
              <li>
                Career
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </li>
              <li>E-mail</li>
              <li>Github</li>
            </ul>

            <ul className={styles.profile_right_subtitle}>
              <li>JEEWON LEE</li>
              <li>24</li>
              <li>Web Front-end</li>
              <li>
                HTML, CSS, Javascript
                <br />
                React js
                <br />
                Photoshop, Illustrator, Figma
              </li>
              <li>Seoul, Republic of Korea</li>
              <li>
                2015.03 ~<br />
                Major in Global-Media, IT college of Soongsil
                <br />
                University
                <br />
                <br />
                2017.01 ~ 2018.10
                <br />
                Served in the Republic of Korea Special Assault
                <br />
                Commando
                <br />
                <br />
                2019.03 ~ 2020.01
                <br />
                Working Holiday in Osaka, Japan
                <br />
                Main Designer of S.Y.Company in Osaka, Japan
                <br />
                <br />
                2020.02 ~ <br />
                Operating Hand-made Accessory Brand A.ELO
                <br />
                <br />
                2020.07 ~ <br />
                Beginning to study Web Front-end
                <br />
              </li>
              <li>leejiwon6315@naver.com</li>
              <li>
                <a href="https://github.com/leejiwon6315">
                  github.com/leejiwon6315
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
