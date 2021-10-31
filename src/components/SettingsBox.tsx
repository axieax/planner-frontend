import { Paper, Input } from "@mui/material";
import { Offering, PlanType, themeStyle, OfferingTerm } from "../App";
import styles from './SettingsBox.module.scss';


interface settingsBoxProps {
  planType: PlanType;
  setPlanType: React.Dispatch<React.SetStateAction<PlanType>>;
  themeIndex: number;
  plan: Array<Offering>
  setPlan: React.Dispatch<React.SetStateAction<Array<Offering>>>
}


const SettingsBox: React.FC<settingsBoxProps> = ({
  planType, setPlanType, themeIndex, plan, setPlan
}) => {
  
  const getTermTuples = (beginning: OfferingTerm, end: OfferingTerm) => {
    let yearTuples = [];
    for (let year = beginning.year; year <= end.year; year++) {
      for (let term = 0; term < planType.num_terms; term++) {
        yearTuples.push([term, year]);
      }
    }
    return yearTuples;
  }

  const fixPlan = (prevPlan: PlanType) => {
    setPlan(() => {
      const termTuples = getTermTuples(prevPlan.start, prevPlan.end);
      return termTuples.map((item) => ({
        term: item[0],
        year: item[1],
        current_uoc: 0,
        max_uoc: item[0] === 0 ? 0 : 20,
        courses: [],
      }))
    })
  }
  return (
  <Paper
    style={themeStyle(themeIndex)}
    className={styles.settings}
  >

    <div>
    number of terms in a year (include summer):<br />
    <Input defaultValue={4} onChange={(e) => 
      setPlanType((prevPlan) => {
        prevPlan.num_terms = parseInt(e.target.value);
        return prevPlan;
      })} />
    </div>
    <div>
      Program (4 number code in the handbook): <br/> 
      <Input defaultValue="3789"
        onChange={(e) =>
        setPlanType((prevPlan) => {
          prevPlan.program = e.target.value;
          return prevPlan;
        })}
      />
    </div>
    <div>
      Starting Term (format: [term],[year]):<br/> 
      <Input defaultValue="1,2020"
        onChange={(e) =>
        setPlanType((prevPlan) => {
          const values = e.target.value.split(",");
          if (parseInt(values[1]) < 2018 || parseInt(values[1]) > prevPlan.end.year) return prevPlan; 
          prevPlan.start.term = parseInt(values[0]);
          prevPlan.start.year = parseInt(values[1]);
          fixPlan(prevPlan);
          return prevPlan;
        })}
      />
    </div>
    <div>
      Ending Term (format: [term],[year]):<br/>
      <Input defaultValue="3,2022"
        onChange={(e) =>
          setPlanType((prevPlan) => {
            const values = e.target.value.split(",");
            if (parseInt(values[1]) < 2018 || parseInt(values[1]) < prevPlan.start.year) return prevPlan; 
            prevPlan.end.term = parseInt(values[0]);
            prevPlan.end.year = parseInt(values[1]);
            fixPlan(prevPlan);
            return prevPlan;
          })}
      />
    </div>
  </Paper>
  )
}

export default SettingsBox;