import React, { useState } from "react";
import styles from "./CourseBox.module.scss";
import Button from "./Button";

interface courseBoxProps {
  selectedCourses: string[];
  setShowSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

const CourseBox: React.FC<courseBoxProps> = ({
  selectedCourses,
  setShowSelect,
}) => {
  const [showUnplaced, setShowUnplaced] = useState(true);
  return (
    <div className={styles.courseBox}>
      <div className={styles.strip}>
        <h2>My Courses</h2>
        <div className={styles.stripSecondary}>
          <h3>Displaying all courses</h3>
          Switch
        </div>
      </div>
      <div className={styles.content}>
        <ul>
          {selectedCourses.map((code) => (
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
