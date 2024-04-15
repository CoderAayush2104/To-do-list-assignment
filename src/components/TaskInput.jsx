// TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';

const TaskInput = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  return (
    <div className="task-input-container">
      <input
      className='task-input'
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={handleInputChange}
      />
      <button className='add-task-button' onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
