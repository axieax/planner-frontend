import { Paper, Input } from "@mui/material";
import { Offering, PlanType, themeStyle } from "../App";
import styles from './SettingsBox.module.scss';


interface settingsBoxProps {
  setPlanType: React.Dispatch<React.SetStateAction<PlanType>>;
  themeIndex: number;
  setPlan: React.Dispatch<React.SetStateAction<Array<Offering>>>
}


const SettingsBox: React.FC<settingsBoxProps> = ({
  setPlanType, themeIndex, setPlan
}) => {
  
  const getTermTuples = (prevPlan: PlanType) => {
    let yearTuples = [];
    for (let year = prevPlan.start.year; year <= prevPlan.end.year; year++) {
      for (let term = 0; term < prevPlan.num_terms; term++) {
        yearTuples.push([term, year]);
      }
    }
    return yearTuples;
  }

  const fixPlan = (prevPlan: PlanType) => {
    const termTuples = getTermTuples(prevPlan);
    setPlan(termTuples.map((item) => ({
        term: item[0],
        year: item[1],
        current_uoc: 0,
        max_uoc: item[0] === 0 ? 0 : 20,
        courses: [],
      })))
  }
  return (
  <Paper
    style={themeStyle(themeIndex)}
    className={styles.settings}
  >
    {/*may remove number of terms in a year - probably should just be a code change.*/}
    <div>
    number of terms in a year (include summer):<br />
    <Input defaultValue={4} onChange={(e) => 
      setPlanType((prevPlan) => {
        const newNumber = parseInt(e.target.value);
        if (isNaN(newNumber)) return prevPlan; 
        const plan = {...prevPlan};
        plan.num_terms = parseInt(e.target.value);
        fixPlan(plan);
        return plan;
      })} />
    </div>
    <div>
      Program (4 number code in the handbook): <br/> 
      <Input defaultValue="3789"
        onChange={(e) =>
        setPlanType((prevPlan) => {
          const plan = {...prevPlan};
          plan.program = e.target.value;
          return plan;
        })}
      />
    </div>
    <div>
      Starting Term (format: [term],[year]):<br/>
      <Input defaultValue="1,2020"
        onChange={(e) =>
        setPlanType((prevPlan) => {
          const values = e.target.value.split(",");
          if (isNaN(parseInt(values[1])) || parseInt(values[1]) < 2018 || parseInt(values[1]) > prevPlan.end.year) return prevPlan; 
          const plan = {...prevPlan};
          plan.start.term = parseInt(values[0]);
          plan.start.year = parseInt(values[1]);
          fixPlan(plan);
          return plan;
        })}
      />
    </div>
    <div>
      Ending Term (format: [term],[year]):<br/>
      <Input defaultValue="3,2021"
        onChange={(e) =>
          setPlanType((prevPlan) => {
            const values = e.target.value.split(",");
            if (isNaN(parseInt(values[1])) || parseInt(values[1]) < 2018 || parseInt(values[1]) < prevPlan.start.year) return prevPlan; 
            const plan = {...prevPlan};
            plan.end.term = parseInt(values[0]);
            plan.end.year = parseInt(values[1]);
            fixPlan(plan);
            return plan;
          })}
      />
    </div>
  </Paper>
  )
}

export default SettingsBox;