import { useState } from "react";
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

type Offering = {
  year: number,
  term: number,
  max_uoc: number,
  current_uoc: number,
  courses: Array<string>,
}

type OfferingTerm = {
  year: number,
  term: number,
}

export type PlanType = {
  start: OfferingTerm,
  end: OfferingTerm,
  num_terms: number,
  program: string,
  // selected courses and plan object seperate
}

export default function App() {
  // change theme
  const [themeIndex, setThemeIndex] = useState(0);
  const nextTheme = () => setThemeIndex((themeIndex + 1) % themes.length);
  
  // Plan
  const [plan, setPlan] = useState<Array<Offering>>([
    {
      year: 2020,
      term: 1,
      max_uoc: 20,
      current_uoc: 6,
      courses: ['COMP1511'],
    }
  ])
  const [planType, setPlanType] = useState<PlanType>(
  {
    start: {year : 2020, term: 1},
    end: {year: 2021, term: 3},
    num_terms: 4,
    program: "3789",
  });
  // Course selection menu
  const [showSelect, setShowSelect] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState(['COMP1511']);

  return (
    <div className="App" style={themeStyle(themeIndex)}>
      <div className="window">
        <Header nextTheme={nextTheme} />
        <div className="interface">
          {showSelect && (
            <CourseSelect
              setSelectedCourses={setSelectedCourses}
              setShowSelect={setShowSelect}
            />
          )}
          <PlanBox planType={planType} setPlanType={setPlanType} selectedCourses={selectedCourses} />
          <CourseBox
            selectedCourses={selectedCourses}
            setShowSelect={setShowSelect}
            planType={planType}
          />
        </div>
      </div>
    </div>
  );
}
