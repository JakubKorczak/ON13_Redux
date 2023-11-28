import { useDispatch } from "react-redux";
import { addTask } from "../redux/reducers/tasks/operations";
import { useState } from "react";

export default function AddTask() {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskName("");
    dispatch(addTask(taskName));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="row g-3 justify-content-between">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            id="task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-success">
            Dodaj taska
          </button>
        </div>
      </form>
      <hr />
    </>
  );
}
