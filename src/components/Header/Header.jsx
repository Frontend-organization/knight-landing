import React from "react";
import Logo from "../Logo";
import styles from "./Header.module.css";

const Header = (props) => {
  const options = [];
  return (
    <header className={styles.Header}>
      <Logo />
      <nav></nav>
    </header>
  );
};

export default Header;
