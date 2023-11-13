import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/actions/counterActions";
import { loggedIn, loggedOut } from "./redux/actions/authActions";

const App = () => {
  // 🏦 state
  const counter = useSelector((state) => state.counterValue.counter);
  // 🏦 state
  const auth = useSelector((state) => state.auth);

  // 🚚 dispatch
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // 🚚 dispatch
    dispatch(increment);
  };

  const handleDecrement = () => {
    // 🚚 dispatch
    dispatch(decrement(3));
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
    </div>
  );
};

export default App;
