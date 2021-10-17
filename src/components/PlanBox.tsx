import React from "react";
import Button from "./Button";
import styles from "./PlanBox.module.scss";

interface planBoxProps {
  plan: object;
}

const PlanBox: React.FC<planBoxProps> = ({ plan }) => {
  return (
    <div className={styles.planBox}>
      <div className={styles.strip}>
        <h2>My Plan</h2>
        <div className={styles.actions}>
          <Button>Snapshot</Button>
          <Button>Auto Place</Button>
        </div>
      </div>
      <div className={styles.content}>
        test
        <br />
        {JSON.stringify(plan)}
      </div>
    </div>
  );
};

export default PlanBox;
