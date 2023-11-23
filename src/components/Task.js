import { deleteTask, toggleTask } from "../redux/reducers/operations";
import { useDispatch } from "react-redux";

export default function Task({ item }) {
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (task) => {
    dispatch(toggleTask(task));
  };

  return (
    <div className="row g-3 justify-content-between">
      <div className="col-auto">
        <span
          style={{
            textDecoration: item.completed && "line-through",
          }}
          className="badge text-bg-light"
        >
          {item.text}
        </span>
      </div>
      <div className="col-auto">
        <div className="btn-group">
          <button
            onClick={() => handleDeleteTask(item.id)}
            className="btn btn-danger"
          >
            Usuń
          </button>
          <button
            onClick={() => handleToggle(item)}
            className="btn btn-warning"
          >
            {!item.completed ? "Zakończ" : "Aktywuj"}
          </button>
        </div>
      </div>
    </div>
  );
}
