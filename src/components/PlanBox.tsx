import { Button } from "@mui/material";
import React from "react";
import { Offering, PlanType } from "../App";
import OfferingGrid from "./OfferingGrid";
import styles from "./PlanBox.module.scss";
import SettingsBox from "./SettingsBox";


interface planBoxProps {
  planType: PlanType;
  setPlanType: React.Dispatch<React.SetStateAction<PlanType>>;
  selectedCourses: Array<string>;
  plan: Array<Offering>;
  setPlan: React.Dispatch<React.SetStateAction<Array<Offering>>>;
  themeIndex: number;
}

const PlanBox: React.FC<planBoxProps> = ({ 
  planType, setPlanType, selectedCourses, plan, themeIndex, setPlan
}) => {
    const submitPlan = async () => {
    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(plan),
    }
    const newPlan = await fetch('http://localhost:6000/plan', requestInit).then((response) => response.json());
    setPlanType(newPlan);
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
        <OfferingGrid
            plan={plan}
            setPlan={setPlan}
            themeIndex={themeIndex}
            planType={planType}
        />
      </div>
      <SettingsBox
        planType={planType}
        setPlanType={setPlanType}
        themeIndex={themeIndex}
        plan={plan}
        setPlan={setPlan}
      />
    </div>
  );
};

export default PlanBox;
