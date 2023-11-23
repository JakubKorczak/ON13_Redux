import { useSelector } from "react-redux";
import { selectTasksCount } from "../redux/selectors";

export default function Info() {
  // const count = useSelector(selectTasksCount);
  const { active, completed } = useSelector(selectTasksCount);

  // const items = useSelector(selectTasksItems);
  // count = {
  //   completed: 0,
  //   active: 0
  // }
  // const count = items.reduce(
  //   (count, task) => {
  //     if (task.completed) {
  //       count.completed = count.completed + 1;
  //     } else {
  //       count.active += 1;
  //     }
  //     return count;
  //   },
  //   { completed: 0, active: 0 }
  // );
  return (
    <div className="col-auto">
      <div className="alert alert-success">active: {active}</div>
      <div className="alert alert-danger">completed: {completed}</div>
    </div>
  );
}
