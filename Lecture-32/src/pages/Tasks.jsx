import { useState } from "react";
import Layout from "../components/layout/Layout";
import CreateTask from "../components/task/CreateTask";
import ShowTask from "../components/task/ShowTask";
import shortid from "shortid";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (text) => {
    const task = {
      text,
      isCompleted: false,
      createdAt: new Date(),
      id: shortid.generate(),
    };
    setTasks([task, ...tasks]);
  };

  return (
    <div>
      <Layout>
        <h1 style={{ textAlign: "center" }}>Task Manager Page</h1>
        <CreateTask addNewTask={addNewTask} />
        <ShowTask tasks={tasks} />
      </Layout>
    </div>
  );
}

export default Tasks;
