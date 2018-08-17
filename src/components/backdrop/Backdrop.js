import React from "react";

import styles from "./Backdrop.scss";

const Backdrop = props => {
  const { show, clicked } = props;
  return show ? <div className={styles.Backdrop} onClick={clicked} /> : null;
};

export default Backdrop;
