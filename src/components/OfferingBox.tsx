import { Input, Paper, Button } from "@mui/material";
import { useState } from "react";
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
  const [showPopover, setShowPopover] = useState(false);
  return (
      <Paper style={themeStyle(themeIndex)}>
        <h3>year {plan[planIndex].year} term {plan[planIndex].term}</h3>
        max uoc: {plan[planIndex].max_uoc} <br/>
        change uoc:
        <Input
          onChange={(e) => setPlan((prevPlan) => {
            const plan = prevPlan.concat([]); // copy
            plan[planIndex].max_uoc = parseInt(e.target.value);
            return plan;
          })}
        /><br/>
        <Button
          onChange={() => setShowPopover((prevPopover) => !prevPopover)}
        >
          +
        </Button>
      </Paper>
  );
}


export default OfferingBox;