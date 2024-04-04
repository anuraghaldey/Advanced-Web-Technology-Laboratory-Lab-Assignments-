// src/App.js
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Task from "./Task";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (text.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text, completed: false }]);
      setText("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  return (
    <Container>
      <h1 className="mt-5">Task Manager</h1>
      <Form className="mt-3">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={addTask}>
          Add Task
        </Button>
      </Form>
      <div className="tasks mt-4">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        ))}
      </div>
    </Container>
  );
};

export default App;
