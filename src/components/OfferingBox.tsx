import { Input, Paper, Button } from "@mui/material";
import { Offering, themeStyle } from "../App";
import Course from "./Course";

interface OfferingBoxProps {
  plan: Array<Offering>;
  setPlan: React.Dispatch<React.SetStateAction<Array<Offering>>>;
  setShowSelect: React.Dispatch<React.SetStateAction<boolean>>;
  setOfferingTerm: React.Dispatch<React.SetStateAction<number>>;
  themeIndex: number;
  planIndex: number;
}


const OfferingBox: React.FC<OfferingBoxProps> = ({
  plan, setPlan, setShowSelect, setOfferingTerm, themeIndex, planIndex
}) => {
  return (
      <Paper style={themeStyle(themeIndex)}>
        <h3>year {plan[planIndex].year} term {plan[planIndex].term}</h3>
        max uoc: {plan[planIndex].max_uoc} <br/>
        change uoc:
        <Input
          onChange={(e) => setPlan((prevPlan) => {
            const plan = [...prevPlan]
            plan[planIndex].max_uoc = parseInt(e.target.value);
            return plan;
          })}
        /><br/><br/>
        {plan[planIndex].courses.map((course) => (<Course course={course} setPlan={setPlan}/>))}
        <Button
          sx={{float: "right"}}
          onClick={() => {
            setShowSelect(true);
            setOfferingTerm(planIndex);
          }}
        >
          +
        </Button>
      </Paper>
  );
}

export default OfferingBox;
