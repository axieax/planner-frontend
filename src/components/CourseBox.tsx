import Button from "@mui/material/Button/Button";
import React, { useState } from "react";
import { PlanType } from "../App";
import styles from "./CourseBox.module.scss";

interface courseBoxProps {
  selectedCourses: string[];
  setShowSelect: React.Dispatch<React.SetStateAction<boolean>>;
  planType: PlanType;
}

const inPlan = (course: string) => {
  return true;
}

const CourseBox: React.FC<courseBoxProps> = ({
  selectedCourses,
  setShowSelect,
  planType,
}) => {
  const [showUnplaced, setShowUnplaced] = useState(true);
  const coursesToShow = !showUnplaced ?  selectedCourses.filter(course => !inPlan(course)) : selectedCourses;
  return (
    <div className={styles.courseBox}>
      <div className={styles.strip}>
        <h2>My Courses</h2>
        <div className={styles.stripSecondary}>
          <Button onClick={() => setShowUnplaced((prevUnplaced) => !prevUnplaced && true)}>
          { showUnplaced ? "Displaying all courses" : "Showing unplaced Courses" }
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <ul>
          {
            coursesToShow.map((code) => (
            <li key={code}>{code}</li>
          ))}
        </ul>
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={() => setShowSelect(true)}>Add a course</Button>
      </div>
    </div>
  );
};

export default CourseBox;
