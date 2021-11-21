import { Input, Button, ClickAwayListener } from "@mui/material";
import Paper from "@mui/material/Paper/Paper";
import React, { useState } from "react";
import { Offering } from "../App";
import styles from "./CourseSelect.module.scss";

interface courseSelectProps {
  setSelectedCourses: React.Dispatch<React.SetStateAction<Array<string>>>;
  setShowSelect: React.Dispatch<React.SetStateAction<boolean>>;
  offeringTerm: number;
  setPlan: React.Dispatch<React.SetStateAction<Array<Offering>>>;
}

const CourseSelect: React.FC<courseSelectProps> = ({
  setSelectedCourses,
  setShowSelect,
  offeringTerm,
  setPlan,
}) => {
  const [input, setInput] = useState('');
  return (
    <ClickAwayListener
    onClickAway={() => setShowSelect(false)}
  >
    <Paper elevation={24} className={styles.courseSelectContainer}>
      Add a course: 
      <Input sx={{m: 1}} onChange={(e) => setInput(e.target.value)}/>

      <Button variant="contained" onClick={()=> {
        setSelectedCourses((prevCourses) => prevCourses.includes(input) ? [...prevCourses] : prevCourses.concat([input]));
        if (!isNaN(offeringTerm)) setPlan((prevPlan) => {
          let plan = JSON.parse(JSON.stringify(prevPlan));
          plan[offeringTerm].courses.push(input);
          return plan;
        });
        setShowSelect(false);
        }}>
        add
      </Button>

      <Button onClick={() => setShowSelect(false)}>X</Button>
    </Paper>
    </ClickAwayListener>
  );
};

export default CourseSelect;
