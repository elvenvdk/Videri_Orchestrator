import React, { Component } from "react";

import styles from "./NavbarMain.scss";
import VideriLogo from "../../../img/svg/videriLogoNav.svg";
import ShowAppsBtn from "../../../img/svg/show_apps_btn.svg";
import NavProfile from "../../../img/svg/nav-profile.svg";

class NavbarMain extends Component {
  render() {
    return (
      <nav className={styles.Navbar}>
        <ul className={styles.Navbar_List}>
          <li className={styles.Navbar_List_Appsbtn}>
            <div className={styles.Navbar_AppsBtn}>
              <img src={ShowAppsBtn} alt="Videri Logo" />
            </div>
          </li>
          <li className={styles.Navbar_List_Logo}>
            <img src={VideriLogo} alt="Videri Logo" />
          </li>
          <li className={styles.Navbar_List_Contenticon}>
            <p>CONTENT</p>
          </li>
          <li className={styles.Navbar_List_Proserveicon}>
            <div className={styles.Navbar_Proserveicon}>
              <p>Organization</p>
              <p>151 Pro-Serv</p>
            </div>
          </li>
          <li className={styles.Navbar_List_Profile}>
            <div className={styles.Navbar_Profile}>
              <p>admin@videri.com</p>
              <img src={NavProfile} alt="Navigation Profile" />
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavbarMain;
