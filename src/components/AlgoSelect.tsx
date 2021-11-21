import { MenuItem, Select } from "@mui/material"
interface AlgoSelectProps {
    setAlgo: React.Dispatch<React.SetStateAction<string>>;
};

const AlgoSelect: React.FC<AlgoSelectProps> = ({setAlgo}) => {
    return (
    <Select
        value='greedy_per_term'
        onChange={(e) => setAlgo(e.target.value)}
      >
        <MenuItem>greedy_per_term</MenuItem>
        <MenuItem>asp_solver</MenuItem>
        <MenuItem>anytime (not implemented)</MenuItem>
      </Select>
    )
}

export default AlgoSelect;
