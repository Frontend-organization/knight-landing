import React from "react";
import styles from "./Button.module.css";

function Button({ type = "button", text = "", variant = "green", icon }) {
  return (
    <button type={type} className={`${styles.Button} ${styles[variant]}`}>
      {text}
      {icon && <i className={`${icon} ${styles.ButtonIcon}`} />}
    </button>
  );
}

export default Button;
