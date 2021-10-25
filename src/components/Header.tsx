import Button from "@mui/material/Button/Button";
import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  nextTheme?: any;
}

export default function Header(props: HeaderProps) {
  return (
    <header>
      <h1>UNSW Degree Planner</h1>
      <div className={styles.rightContainer}>
        <Button>About</Button>
        <Button>Help</Button>
        <Button>Feedback</Button>
        <Button onClick={props.nextTheme}>Change Theme</Button>
      </div>
    </header>
  );
}
