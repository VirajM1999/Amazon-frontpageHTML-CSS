import React from 'react';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Task Id</th>
          <th>Task Name</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.taskId}</td>
            <td>{task.task}</td>
            <td>{task.dueDate}</td>
            <td>{task.priority}</td>
            <td>
              <button 
                className="btn btn-danger"
                onClick={() => onDeleteTask(task.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
