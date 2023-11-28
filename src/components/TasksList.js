import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { fetchTasks } from "../redux/reducers/tasks/operations";
import { useEffect } from "react";
import {
  selectTasksError,
  selectTasksIsLoading,
  selectTasksItems,
} from "../redux/selectors";

export default function TasksList() {
  const isLoading = useSelector(selectTasksIsLoading);
  const error = useSelector(selectTasksError);
  const tasks = useSelector(selectTasksItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  if (error) return <p>error...</p>;

  return (
    <div>
      {isLoading && <p>loading...</p>}
      {tasks.map((item) => (
        <Task key={item.id} item={item} />
      ))}
    </div>
  );
}
