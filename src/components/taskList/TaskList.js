import { useSelector } from "react-redux";
import Task from "../task/Task";

export default function TaskList() {
  const tasks = useSelector((state) => state.task);
  console.log(tasks);
  return (
    <div>
      <h1>TaskList</h1>
      {tasks.map((task) => (
        <Task
          id={task.id}
          key={task.id}
          name={task.name}
          active={task.active}
        />
      ))}
    </div>
  );
}
