import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { fetchTasks } from "../redux/reducers/operations";
import { useEffect } from "react";
import {
  selectTasksError,
  selectTasksIsLoading,
  selectVisibleTasks,
} from "../redux/selectors";

export default function TasksList() {
  const isLoading = useSelector(selectTasksIsLoading);
  const error = useSelector(selectTasksError);
  const visibleTasks = useSelector(selectVisibleTasks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  if (error) return <p>error...</p>;

  return (
    <div>
      {isLoading && <p>loading...</p>}
      {visibleTasks.map((item) => (
        <Task key={item.id} item={item} />
      ))}
    </div>
  );
}
