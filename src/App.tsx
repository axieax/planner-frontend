import React, { useState } from "react";
import "./App.scss";

import Header from "./components/Header";
import PlanBox from "./components/PlanBox";
import CourseBox from "./components/CourseBox";
import CourseSelect from "./components/CourseSelect";

const themes = ["orange", "purple", "green", "blue", "sideways", "dark"];
const themeStyle = (themeIndex: number) => ({
  backgroundImage: "url(/backgrounds/" + themes[themeIndex] + ".png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

export default function App() {
  // change theme
  const [themeIndex, setThemeIndex] = useState(0);
  const nextTheme = () => setThemeIndex((themeIndex + 1) % themes.length);
  // Plan
  const [plan, setPlan] = useState({});
  // Course selection menu
  const [showSelect, setShowSelect] = useState(false);

  // Courses
  const [selectedCourses, setSelectedCourses] = useState([
    "COMP1511",
    "COMP1521",
    "COMP1531",
    "COMP2521",
  ]);

  return (
    <div className="App" style={themeStyle(themeIndex)}>
      <div className="window">
        <Header nextTheme={nextTheme} />
        <div className="interface">
          {showSelect && (
            <CourseSelect
              selectedCourses={selectedCourses}
              setSelectedCourses={setSelectedCourses}
              setShowSelect={setShowSelect}
            />
          )}
          <PlanBox plan={plan} />
          <CourseBox
            selectedCourses={selectedCourses}
            setShowSelect={setShowSelect}
          />
        </div>
      </div>
    </div>
  );
}
