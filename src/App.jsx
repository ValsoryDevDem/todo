import React, { useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm";
import { Task } from "./components/Task";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevState) => [task, ...prevState]);
  };

  const removeTask = (taskID) => {
    setTasks((prevState) => prevState.filter(({ id }) => id !== taskID));
  };

  return (
    <div className="App">
      <header className="bg-indigo-600 text-white py-4">
        <h1 className="text-4xl text-center">ToDo List</h1>
      </header>
      <main className="container mx-auto py-4">
        <AddTaskForm addTask={addTask} />
        <ul className="tasks">
          {tasks.map((task) => (
            <Task key={task.id} task={task} removeTask={removeTask} />
          ))}
        </ul>
      </main>
    </div>
  );
}
