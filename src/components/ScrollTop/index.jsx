import React, { useEffect, useState } from "react";
import styles from "./ScrollTop.module.css";

function ScrollTop({ breakpoint = 80 }) {
  const [activeScroll, setActiveScroll] = useState();

  useEffect(() => {
    if (window.pageYOffset > breakpoint) {
      setActiveScroll(true);
    }

    const listener = () => {
      if (window.pageYOffset > breakpoint) {
        setActiveScroll(true);
      } else {
        setActiveScroll(false);
      }
    };

    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener(listener);
    };
  }, []);

  return (
    <button
      className={`${styles.ScrollTop} ${
        activeScroll ? styles.ScrollTopActive : ""
      }`}
      type="button"
      aria-label="button-arrow"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      }}
    >
      <i className="fa fa-angle-up" />
    </button>
  );
}

export default ScrollTop;
