import { useState } from "react";
import styles from "./App.module.scss";

import Header from "./components/Header";
import PlanBox from "./components/PlanBox";
import CourseBox from "./components/CourseBox";
import CourseSelect from "./components/CourseSelect";

const themes = ["orange", "purple", "green", "blue", "sideways", "dark"];
export const themeStyle = (themeIndex: number) => ({
  backgroundImage: "url(/backgrounds/" + themes[themeIndex] + ".png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

export type Offering = {
  year: number,
  term: number,
  max_uoc: number,
  courses: Array<string>,
}

export type OfferingTerm = {
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
      term: 0,
      max_uoc: 0,
      courses: [],
    },
    {
      year: 2020,
      term: 1,
      max_uoc: 20,
      courses: ['COMP1511'],
    },
    {
      year: 2020,
      term: 2,
      max_uoc: 20,
      courses: [],
    },
    {
      year: 2020,
      term: 3,
      max_uoc: 20,
      courses: [],
    },
    {
      year: 2021,
      term: 0,
      max_uoc: 0,
      courses: [],
    },
    {
      year: 2021,
      term: 1,
      max_uoc: 20,
      courses: [],
    },
    {
      year: 2021,
      term: 2,
      max_uoc: 20,
      courses: [],
    },
    {
      year: 2021,
      term: 3,
      max_uoc: 20,
      courses: [],
    },
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
  const [offeringTerm, setOfferingTerm] = useState(NaN);
  return (
    <div className={styles.App} style={themeStyle(themeIndex)}>
      <div className={styles.window}>
        <Header nextTheme={nextTheme} />
        <div className={styles.interface}>
          {showSelect && (
            <CourseSelect
              setPlan={setPlan}
              setSelectedCourses={setSelectedCourses}
              setShowSelect={setShowSelect}
              offeringTerm={offeringTerm}
            />
          )}
          <PlanBox
            planType={planType}
            setPlanType={setPlanType}
            selectedCourses={selectedCourses}
            setShowSelect={setShowSelect}
            plan={plan}
            setPlan={setPlan}
            themeIndex={themeIndex}
            setOfferingTerm={setOfferingTerm}
            />
          <CourseBox
            selectedCourses={selectedCourses}
            setShowSelect={setShowSelect}
            plan={plan}
            setOfferingTerm={setOfferingTerm}
          />
        </div>
      </div>
    </div>
  );
}
