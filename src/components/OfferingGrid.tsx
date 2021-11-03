import { Offering, PlanType } from "../App";
import OfferingBox from "./OfferingList";
import styles from "./OfferingGrid.module.scss";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

interface OfferingGridProps {
  plan: Array<Offering>;
  setPlan: React.Dispatch<React.SetStateAction<Array<Offering>>>;
  themeIndex: number;
  planType: PlanType;
}


const OfferingGrid: React.FC<OfferingGridProps> = ({
  plan, setPlan, themeIndex, planType
}) => {
  const [numDisplayedTerms, setNumDisplayedTerms] = useState(planType.num_terms * (planType.end.year - planType.start.year + 1));
  useEffect(() => 
    setNumDisplayedTerms(planType.num_terms * (planType.end.year - planType.start.year + 1))
  , [planType.num_terms, planType.end.year, planType.start.year]);
  return (
    <Box 
      sx={{
        gridTemplateColumns: "1fr ".repeat(planType.num_terms),
        gridTemplateRows: "1fr ".repeat(planType.end.year - planType.start.year + 1),
      }}
      className={styles.offering}
    >
      {Array.from(Array(numDisplayedTerms).keys()).map((number) => (
        <OfferingBox
          key={number}
          plan={plan}
          setPlan={setPlan}
          planIndex={number}
          themeIndex={themeIndex}
        />))
      }
    </Box>
  )
}
export default OfferingGrid;