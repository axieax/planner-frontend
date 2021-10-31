import { Paper, Input } from "@mui/material";
import { PlanType, themeStyle } from "../App";
import styles from './SettingsBox.module.scss';


interface settingsBoxProps {
  planType: PlanType;
  setPlanType: React.Dispatch<React.SetStateAction<PlanType>>;
  themeIndex: number;
}


const SettingsBox: React.FC<settingsBoxProps> = ({
  planType, setPlanType, themeIndex
}) => {
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
            return prevPlan;
          })}
      />
    </div>
  </Paper>
  )
}

export default SettingsBox;