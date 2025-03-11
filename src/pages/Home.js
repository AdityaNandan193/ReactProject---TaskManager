import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const Home = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const [task, setTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ text: task });
      setTask("");
    }
  };

  return (
    <div>
      <h2 className="text-center mb-4">Task Management</h2>
      <form onSubmit={handleAddTask} className="mb-4 d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              task.completed ? "bg-success text-white" : ""
            }`}
          >
            {task.text}
            <div>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => toggleTask(task.id)}
              >
                Toggle
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
