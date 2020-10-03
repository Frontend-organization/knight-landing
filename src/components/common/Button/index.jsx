import React from "react";
import styles from "./Button.module.css";

function Button({ type = "button", text = "", variant = "green" }) {
  return (
    <button type={type} className={`${styles.Button} ${styles[variant]}`}>
      {text}
    </button>
  );
}

export default Button;
