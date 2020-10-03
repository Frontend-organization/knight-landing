import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import styles from "./Header.module.css";

const Header = (props) => {
  const options = [];
  const [headerSticky, setHeaderSticky] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);
  const [headerScrolling, setHeaderScrolling] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    const listener = (e) => {
      if (lastScroll > window.pageYOffset) {
        setHeaderSticky(true);
      } else {
        setHeaderSticky(false);
        setHeaderScrolling(true);
      }
      lastScroll = window.pageYOffset;
    };

    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener(listener);
    };
  }, []);

  useEffect(() => {
    console.log({ headerSticky });
  }, [headerSticky]);

  function toggleNavbar() {
    setHeaderActive(!headerActive);
  }

  return (
    <header
      className={`${
        headerActive ? `${styles.Header} ${styles.HeaderActive}` : styles.Header
      } ${headerSticky ? styles.HeaderSticky : ""}
      ${headerScrolling ? styles.HeaderScrolling : ""}`}
    >
      <div className={styles.HeaderContent}>
        <Logo />
        <nav className={styles.Navbar}>
          <ul className={styles.Navbar}>
            <li className={styles.NavbarOption}>
              <a href="#">Features</a>
            </li>
            <li className={styles.NavbarOption}>
              <a href="#">Pricing</a>
            </li>
            <li className={styles.NavbarOption}>
              <a href="#">FAQ</a>
            </li>
            <li className={styles.NavbarOption}>
              <a href="#">Blog</a>
            </li>
            <button className={styles.NavbarBtnAction} type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`feather feather-layout Icon`}
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              Try Generator
            </button>
          </ul>
        </nav>
      </div>
      <button
        className={styles.NavbarController}
        type="button"
        onClick={() => {
          toggleNavbar();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-grid"
        >
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      </button>
    </header>
  );
};

export default Header;
