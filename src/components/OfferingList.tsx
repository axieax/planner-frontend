import { Paper } from "@mui/material";
import { Offering, themeStyle } from "../App";

interface OfferingBoxProps {
  plan: Array<Offering>;
  setPlan: React.Dispatch<React.SetStateAction<Array<Offering>>>;
  themeIndex: number;
  planIndex: number;
  numTerms: number;
}


const OfferingBox: React.FC<OfferingBoxProps> = ({
  plan, setPlan, themeIndex, planIndex, numTerms
}) => {
  const lastOffering = plan[plan.length - 1];
  for (let i = 0; planIndex >= plan.length; i++) {
    plan.push({
      year: lastOffering.year + Math.floor(i / numTerms),
      term: lastOffering.term + i % numTerms,
      max_uoc: lastOffering.term + i % numTerms === 0 ? 0 : 20,
      current_uoc: 0,
      courses: [],
    });
  }
  return (
    <Paper style={themeStyle(themeIndex)}>
      {JSON.stringify(plan[planIndex].courses)} {planIndex}
    </Paper>
  );
}

export default OfferingBox;