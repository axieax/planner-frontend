import React from "react";
import styles from "./CourseSelect.module.scss";

interface courseSelectProps {
  selectedCourses: string[];
  setSelectedCourses: React.Dispatch<React.SetStateAction<string[]>>;
  setShowSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

const CourseSelect: React.FC<courseSelectProps> = ({
  selectedCourses,
  setSelectedCourses,
  setShowSelect,
}) => {
  return (
    <div className={styles.courseSelectContainer}>
      popup
      <button onClick={() => setShowSelect(false)}>X</button>
    </div>
  );
};

export default CourseSelect;
