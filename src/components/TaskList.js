import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  const handleDelete = (taskId) => {
    onDelete(taskId);
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id} // Assign a unique key prop to each rendered Task component
          task={task} // Pass the task object as a prop to Task component
          onDelete={handleDelete} // Pass the handleDelete function as a prop to Task component
        />
      ))}
    </div>
  );
}

export default TaskList;
