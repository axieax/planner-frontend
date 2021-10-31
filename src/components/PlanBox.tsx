import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
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
  const [planDisplay, setPlanDisplay] = useState({...planType, courses: selectedCourses, plan: plan});
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
  useEffect(() => {
    setPlanDisplay({...planType, courses: selectedCourses, plan: plan});
  });
  const numYears = planDisplay.end.year - planDisplay.start.year + 1;
  const numDisplayedTerms = planDisplay.num_terms * (numYears);
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
            numTerms={numDisplayedTerms}
            themeIndex={themeIndex}
            numYears={numYears}
        />
      </div>
      <SettingsBox
        planType={planType}
        setPlanType={setPlanType}
        themeIndex={themeIndex}
      />
    </div>
  );
};

export default PlanBox;
