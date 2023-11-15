import { useDispatch } from "react-redux";
import { removeTask, toggleTask } from "../../redux/reducers/taskSlice";

export default function Task({ id, name, active }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeTask(id));
    // {
    //   type: 'removeTask',
    //   payload: id
    // }
  };
  const handleToggle = () => {
    dispatch(toggleTask(id));
  };
  return (
    <div
      style={{
        textDecoration: active ? "none" : "line-through",
      }}
    >
      Task - {name}
      <button onClick={handleToggle}>
        {active ? "deactivate" : "activate"}
      </button>
      <button onClick={handleRemove}>remove</button>
    </div>
  );
}
