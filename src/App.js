import { useDispatch, useSelector } from "react-redux";
// import { decrement } from "./redux/actions/counterActions";
// import { loggedIn, loggedOut } from "./redux/actions/authActions";
import { decrement, increment } from "./redux/reducers/counterReducer";
import { loggedIn, loggedOut } from "./redux/reducers/authReducer";
import TaskList from "./components/taskList/TaskList";
import TaskForm from "./components/taskForm/TaskForm";

const App = () => {
  // 🏦 state
  const counter = useSelector((state) => state.counterValue.counter);
  // 🏦 state
  const auth = useSelector((state) => state.auth);

  // 🚚 dispatch
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // 🚚 dispatch
    dispatch(increment());
  };

  const handleDecrement = () => {
    // 🚚 dispatch
    dispatch(decrement(5));
  };

  const handleLoggedIn = () => {
    // 🚚 dispatch
    dispatch(
      loggedIn({
        name: "Bob",
        username: "Bobber",
      })
    );
  };

  const handleLoggedOut = () => {
    // 🚚 dispatch
    dispatch(loggedOut());
  };

  return (
    <div>
      {auth.isLoggedIn ? (
        <p>
          Zalogowany - {auth.user.name} {auth.user.username}
        </p>
      ) : (
        <p>Nie zalogowany</p>
      )}
      {counter}
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleLoggedIn}>Zaloguj</button>
      <button onClick={handleLoggedOut}>Wyloguj</button>
      <br />
      <hr />
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;
