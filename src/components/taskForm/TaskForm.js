import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/reducers/taskSlice";

export default function TaskForm() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(name));
  };

  return (
    <form onSubmit={handleSubmit}>
      TaskForm
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Zapisz</button>
    </form>
  );
}
