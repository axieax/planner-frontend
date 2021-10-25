import { Input, Button } from "@mui/material";
import Paper from "@mui/material/Paper/Paper";
import React, { useState } from "react";
import styles from "./CourseSelect.module.scss";

interface courseSelectProps {
  setSelectedCourses: React.Dispatch<React.SetStateAction<Array<string>>>;
  setShowSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

const CourseSelect: React.FC<courseSelectProps> = ({
  setSelectedCourses,
  setShowSelect,
}) => {
  const [input, setInput] = useState('');
  return (
    <Paper elevation={24} className={styles.courseSelectContainer}>
      Add a course: 
      <Input sx={{m: 1}} onChange={(e) => setInput(e.target.value)}/>

      <Button variant="contained" onClick={()=> {
        setSelectedCourses((prevCourses) => prevCourses.concat([input]));
        setShowSelect(false);
        }}>
        add
      </Button>

      <Button onClick={() => setShowSelect(false)}>X</Button>
    </Paper>
  );
};

export default CourseSelect;
