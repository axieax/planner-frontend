import Button from "@mui/material/Button/Button";
import React from "react";
import { PlanType } from "../App";
import styles from "./PlanBox.module.scss";


interface planBoxProps {
  planType: PlanType;
  setPlanType: React.Dispatch<React.SetStateAction<PlanType>>;
  selectedCourses: Array<string>;
}

const PlanBox: React.FC<planBoxProps> = ({ planType: plan, setPlanType: setPlan, selectedCourses }) => {
  const submitPlan = async () => {
    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(plan),
    }
    const newPlan = await fetch('http://localhost:6000/plan', requestInit).then((response) => response.json());
    setPlan(newPlan);
  }
  return (
    <div className={styles.planBox}>
      <div className={styles.strip}>
        <h2>My Plan</h2>
        <div className={styles.actions}>
          <Button>Snapshot</Button>
          <Button onClick={submitPlan}>Auto Place</Button>
        </div>
      </div>
      <div className={styles.content}>
        {JSON.stringify({...plan, selected_courses: selectedCourses})}
      </div>
    </div>
  );
};

export default PlanBox;
