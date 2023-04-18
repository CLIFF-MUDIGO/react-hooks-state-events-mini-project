import React from "react";

function Task({ task, onDelete }) {
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="task">
      <div className="label">{task.category}</div> {/* Display task's category */}
      <div className="text">{task.text}</div> {/* Display task's text */}
      <button className="delete" onClick={handleDelete}>
        X
      </button>{" "}
      {/* Add onClick event handler for delete */}
    </div>
  );
}

export default Task;
