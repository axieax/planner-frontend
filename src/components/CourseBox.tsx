import Button from "@mui/material/Button/Button";
import React, { useState } from "react";
import { Offering } from "../App";
import Course from "./Course";
import styles from "./CourseBox.module.scss";

interface courseBoxProps {
  selectedCourses: string[];
  setShowSelect: React.Dispatch<React.SetStateAction<boolean>>;
  plan: Array<Offering>;
  setPlan: React.Dispatch<React.SetStateAction<Array<Offering>>>;
  setOfferingTerm: React.Dispatch<React.SetStateAction<number>>;
  setSelectedCourses: React.Dispatch<React.SetStateAction<Array<string>>>;
}

const inPlan = (course: string, plan: Array<Offering>) => plan.reduce<Array<string>>((prev, curr) => prev.concat(curr.courses), []).includes(course);

const CourseBox: React.FC<courseBoxProps> = ({
  selectedCourses,
  setShowSelect,
  plan,
  setPlan,
  setOfferingTerm,
  setSelectedCourses,
}) => {
  const [showUnplaced, setShowUnplaced] = useState(true);
  const coursesToShow = !showUnplaced ?  selectedCourses.filter(course => !inPlan(course, plan)) : selectedCourses;

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
            <li key={code}>
              <Course
                course={code}
                setPlan={setPlan}
                setSelectedCourses={setSelectedCourses}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          onClick={() => {
            setShowSelect(true);
            setOfferingTerm(NaN);
          }}
        >
          Add a course
        </Button>
      </div>
    </div>
  );
};

export default CourseBox;
