import React from "react";
import styles from "./PageStyles/ProfilePage.module.scss";
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
            <table className={styles.profile_table}>
              <tbody>
                <tr>
                  <th className={styles.t_left_part}>Name</th>
                  <td className={styles.t_right_part}>JEEWON LEE</td>
                </tr>

                <tr>
                  <th className={styles.t_left_part}>Age</th>
                  <td className={styles.t_right_part}>24</td>
                </tr>

                <tr>
                  <th className={styles.t_left_part}>Position</th>
                  <td className={styles.t_right_part}>Web Front-end</td>
                </tr>

                <tr>
                  <th className={styles.t_left_part}>Tech Stack</th>
                  <td className={styles.t_right_part}>
                    HTML, CSS, Javascript
                    <br />
                    React js
                    <br />
                    Photoshop, Illustrator, Figma
                  </td>
                </tr>

                <tr>
                  <th className={styles.t_left_part}>Location</th>
                  <td className={styles.t_right_part}>
                    Seoul, Republic of Korea
                  </td>
                </tr>

                <tr>
                  <th className={styles.t_left_part}>Career</th>
                  <td className={styles.t_right_part}>
                    2015.03 ~<br />
                    Major in Global-Media, IT college of Soongsil University
                    <br />
                    <br />
                    2017.01 ~ 2018.10
                    <br />
                    Served in the Republic of Korea Special Assault Commando
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
                    Operating Hand-made Accessory
                    <br />
                    Brand A.ELO
                    <br />
                    <br />
                    2020.07 ~ <br />
                    Beginning to study Web Front-end
                  </td>
                </tr>

                <tr>
                  <th className={styles.t_left_part}>E-mail</th>
                  <td className={styles.t_right_part}>
                    leejiwon6315@naver.com
                  </td>
                </tr>

                <tr>
                  <th className={styles.t_left_part}>Github</th>
                  <td className={styles.t_right_part}>
                    <a href="https://github.com/leejiwon6315">
                      github.com/leejiwon6315
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
