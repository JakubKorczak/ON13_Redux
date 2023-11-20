import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  fetchLocations,
  fetchTasks,
  toggleTask,
} from "./redux/reducers/operations";
import { useState } from "react";

const App = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();
  const {
    isLoading: isLoadingLocations,
    error: errorLocations,
    locations,
  } = useSelector((state) => state.locations);
  const { isLoading, error, items } = useSelector((state) => state.tasks);

  const handleGetLocation = () => {
    dispatch(fetchLocations());
  };

  const handleGetTasks = () => {
    dispatch(fetchTasks("jakies dane"));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (task) => {
    dispatch(toggleTask(task));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(taskName));
  };

  if (isLoadingLocations || isLoading) return <p>loading...</p>;
  if (errorLocations || error) return <p>error...</p>;

  return (
    <div>
      <button onClick={handleGetLocation}>Pobierz lokalizacje</button>
      <button onClick={handleGetTasks}>Pobierz taski</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </form>
      {locations?.results.map((loc) => (
        <p>{loc.name}</p>
      ))}
      {items.map((item) => (
        <div>
          <div>
            {item.text}{" "}
            <button onClick={() => handleDeleteTask(item.id)}>Usuń</button>
            <button onClick={() => handleToggle(item)}>
              Zmien status - {item.completed ? "completed" : "not completed"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
