import { Offering } from "../App";
import OfferingBox from "./OfferingList";
import styles from "./OfferingGrid.module.scss";
import { Box } from "@mui/system";

interface OfferingGridProps {
  plan: Array<Offering>;
  setPlan: React.Dispatch<React.SetStateAction<Array<Offering>>>;
  themeIndex: number;
  numTerms: number;
  numYears: number;
}


const OfferingGrid: React.FC<OfferingGridProps> = ({
  plan, setPlan, themeIndex, numTerms, numYears
}) => {
  const numCols = numTerms/numYears; 
  return (
    <Box 
      sx={{
        gridTemplateColumns: "1fr ".repeat(numCols),
        gridTemplateRows: "1fr ".repeat(numYears),
      }}
      className={styles.offering}
    >
      {Array.from(Array(numTerms).keys()).map((number) => (
        <OfferingBox
          numTerms={numTerms}
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