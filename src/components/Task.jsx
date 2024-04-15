// Task.js

// Task component represents an individual task item
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      {/* Checkbox to toggle task completion */}
      <input
        className='checkbox'
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      {/* Task text */}
      <span>{task.text}</span>
      {/* Button to delete the task */}
      <button className="delete-task-button" onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
