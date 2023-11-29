import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import Tasks from "./components/Tasks";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { me } from "./redux/reducers/auth/operation";
import { selectIsRefreshing } from "./redux/reducers/auth/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(me());
  }, [dispatch]);
  if (isRefreshing) return <p>loading...</p>;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={<ProtectedRoute element={<Login />} redirect="/tasks" />}
        />
        <Route
          path="register"
          element={<ProtectedRoute element={<Register />} redirect="/tasks" />}
        />
        <Route
          path="tasks"
          element={<PrivateRoute element={<Tasks />} redirect="/login" />}
        />
      </Route>
    </Routes>
  );
};

export default App;
