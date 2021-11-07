import { Offering, PlanType } from "../App";
import OfferingBox from "./OfferingBox";
import styles from "./OfferingGrid.module.scss";
import { Box } from "@mui/system";

interface OfferingGridProps {
  plan: Array<Offering>;
  setPlan: React.Dispatch<React.SetStateAction<Array<Offering>>>;
  setShowSelect: React.Dispatch<React.SetStateAction<boolean>>;
  setOfferingTerm: React.Dispatch<React.SetStateAction<number>>;
  themeIndex: number;
  planType: PlanType;
}


const OfferingGrid: React.FC<OfferingGridProps> = ({
  plan, setPlan, setShowSelect, setOfferingTerm, themeIndex, planType
}) => {
  const numDisplayedTerms = planType.num_terms * (planType.end.year - planType.start.year + 1);
  return (
    <Box 
      sx={{
        gridTemplateColumns: "1fr ".repeat(planType.num_terms),
      }}
      className={styles.offering}
    >
      {Array.from(Array(numDisplayedTerms).keys()).map((number) => (
        <OfferingBox
          key={number}
          plan={plan}
          setPlan={setPlan}
          setShowSelect={setShowSelect}
          setOfferingTerm={setOfferingTerm}
          planIndex={number}
          themeIndex={themeIndex}
        />))
      }
    </Box>
  )
}
export default OfferingGrid;