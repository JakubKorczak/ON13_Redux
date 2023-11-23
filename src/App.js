import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <AddTask />
      <TasksList />
    </>
  );
};

export default App;
