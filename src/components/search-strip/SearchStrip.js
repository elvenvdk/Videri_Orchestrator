import React from "react";

import styles from "./SearchStrip.scss";
import SearchStripIcon from "../../img/svg/search-strip-icon.svg";
import SearchStripControlsIcon from "../../img/svg/search-strip-controls-icon.svg";
import SearchBarIcon from "../../img/svg/search-bar-and-magnifyer.svg";

const SearchStrip = () => {
  return (
    <div className={styles.Searchstrip_Container}>
      <p>CONTENT</p>
      <div className={styles.Searchstrip_Container_Icons}>
        <img src={SearchStripIcon} alt="Drag and Drop Icon" />
        <div className={styles.Searchstrip_Container_Text}>
          <p>DRAG and DROP files</p>
          <p>
            Recommended file types: Images (.png), videos(.mp4) and apps (.apk)
            up to 3GB in file size
          </p>
        </div>
        <img src={SearchStripControlsIcon} alt="Controls Icon" />
        <img src={SearchBarIcon} alt="Searchbar Icon" />
      </div>
    </div>
  );
};

export default SearchStrip;
