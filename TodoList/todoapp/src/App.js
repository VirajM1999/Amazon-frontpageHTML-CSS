import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <h1 className="my-4">Todo Web Application</h1>
      <AddTask onAddTask={handleAddTask} />
      <hr />
      <h2>Task List</h2>
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
