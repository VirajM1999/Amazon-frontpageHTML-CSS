import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
    const [taskId, setTaskId] = useState('');
    const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      taskId,
      task,
      dueDate,
      priority,
    };
    onAddTask(newTask);
    setTaskId();
    setTask('');
    setDueDate('');
    setPriority('Medium');
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label>Task Id</label>
        <input
          type="number"
          className="form-control"
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Task Name</label>
        <input
          type="text"
          className="form-control"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          className="form-control"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Priority</label>
        <select
          className="form-control"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
