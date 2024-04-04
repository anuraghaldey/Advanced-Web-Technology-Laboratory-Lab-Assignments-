// src/Task.js
import React from "react";
import { Button } from "react-bootstrap";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <span>{task.text}</span>
      <div>
        <Button variant="success" size="sm" onClick={() => onToggle(task.id)}>
          {task.completed ? "Undo" : "Done"}
        </Button>{" "}
        <Button variant="danger" size="sm" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Task;
