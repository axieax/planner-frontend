import { Input, Paper } from "@mui/material";
import { Droppable } from "react-beautiful-dnd";
import { Offering, themeStyle } from "../App";

interface OfferingBoxProps {
  plan: Array<Offering>;
  setPlan: React.Dispatch<React.SetStateAction<Array<Offering>>>;
  themeIndex: number;
  planIndex: number;
}


const OfferingBox: React.FC<OfferingBoxProps> = ({
  plan, setPlan, themeIndex, planIndex
}) => {
  return (
      <Paper style={themeStyle(themeIndex)}>
        <h3>year {plan[planIndex].year} term {plan[planIndex].term}</h3>
        change uoc:
        <Input
          onChange={(e) => setPlan((prevPlan) => {
            const plan = prevPlan.concat([]); // copy
            plan[planIndex].max_uoc = parseInt(e.target.value);
            return plan;
          })}
        /><br/>
        {JSON.stringify(plan[planIndex].courses)}
      </Paper>
  );
}


export default OfferingBox;