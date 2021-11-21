import { Button, Paper } from "@mui/material";
import { Offering } from "../App"
interface CourseProps {
  course: string;
  setPlan: React.Dispatch<React.SetStateAction<Array<Offering>>>;
  setSelectedCourses?: React.Dispatch<React.SetStateAction<Array<string>>>;
};

const Course: React.FC<CourseProps> = ({ course, setPlan, setSelectedCourses }) => {
  const removeCourse = () => {
    if (setSelectedCourses !== undefined) {
      setSelectedCourses((prevCourses) => prevCourses.filter((selectedCourse) => selectedCourse !== course))
    }
    setPlan((prevPlan) => {
      let plan = [...prevPlan];
      plan.forEach((term) => term.courses = term.courses.filter((termCourse) => termCourse !== course))
      return plan;
    })
  }
  return (
    <Paper
      sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      {course}
      <Button
        onClick={removeCourse}
      >
        -
      </Button>
    </Paper>
  );
}

export default Course;