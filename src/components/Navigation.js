import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useTasks } from "../context/TaskContext";

const Navigation = () => {
  const { toggleTheme } = useTheme();
  const { downloadTasks } = useTasks();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Task Manager
        </Link>
        <div>
          <button className="btn btn-light me-2" onClick={toggleTheme}>
            Change Theme
          </button>
          <button className="btn btn-success" onClick={downloadTasks}>
            Download Tasks
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
