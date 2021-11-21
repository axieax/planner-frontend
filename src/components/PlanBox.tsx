import { Button } from "@mui/material";
import React, { useState } from "react";
import { Offering, PlanType } from "../App";
import AlgoSelect from "./AlgoSelect";
import OfferingGrid from "./OfferingGrid";
import styles from "./PlanBox.module.scss";
import SettingsBox from "./SettingsBox";


interface planBoxProps {
  planType: PlanType;
  setPlanType: React.Dispatch<React.SetStateAction<PlanType>>;
  selectedCourses: Array<string>;
  setShowSelect: React.Dispatch<React.SetStateAction<boolean>>;
  plan: Array<Offering>;
  setPlan: React.Dispatch<React.SetStateAction<Array<Offering>>>;
  themeIndex: number;
  setOfferingTerm: React.Dispatch<React.SetStateAction<number>>;
}

const PlanBox: React.FC<planBoxProps> = ({ 
  planType, setPlanType, selectedCourses, setShowSelect, plan, setPlan, themeIndex, setOfferingTerm
}) => {
  const [algo, setAlgo] = useState('greedy_per_term');
  const submitPlan = async () => {
    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Access-Allow-Control-Origin': '*'
      },
      body: JSON.stringify({...planType, selected_courses: selectedCourses, plan: plan, algo: algo}),
    }
    const newPlan = await fetch('http://localhost:5000/plan', requestInit).then((response) => response.json());
    setPlan(newPlan.plan);
  }
  return (
    <div className={styles.planBox}>
      <div className={styles.strip}>
        <h2>My Plan</h2>
        <div className={styles.strip}>
          <Button>Snapshot</Button>
          <Button onClick={submitPlan}>Auto Place</Button>
          <AlgoSelect setAlgo={setAlgo}/>
        </div>
      </div>
      <div className={styles.content}>
        <OfferingGrid
            plan={plan}
            setPlan={setPlan}
            setShowSelect={setShowSelect}
            setOfferingTerm={setOfferingTerm}
            themeIndex={themeIndex}
            planType={planType}
        />
      </div>
      <SettingsBox
        setPlanType={setPlanType}
        themeIndex={themeIndex}
        setPlan={setPlan}
      />
    </div>
  );
};

export default PlanBox;
