// Task.js

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input
      className='checkbox'
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.text}</span>
      
      <button className = "delete-task-button" onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
