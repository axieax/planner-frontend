import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: any;
  children?: string;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
