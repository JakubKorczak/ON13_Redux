import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import Tasks from "./components/Tasks";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
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
      {/* <AddTask />
      <TasksList /> */}
    </Routes>
  );
};

export default App;
