// TaskInput.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';

// TaskInput component allows users to input new tasks
const TaskInput = () => {
  // State to manage the text of the new task
  const [taskText, setTaskText] = useState('');
  
  // Redux dispatch function
  const dispatch = useDispatch();

  // Function to handle changes in the input field
  const handleInputChange = (e) => {
    setTaskText(e.target.value); // Update task text in state
  };

  // Function to handle adding a new task
  const handleAddTask = () => {
    // Check if task text is not empty
    if (taskText.trim() !== '') {
      // Dispatch action to add task to Redux store
      dispatch(addTask(taskText));
      // Clear the input field after adding the task
      setTaskText('');
    }
  };

  return (
    <div className="task-input-container">
      {/* Input field for entering new task */}
      <input
        className='task-input'
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={handleInputChange} // Call handleInputChange on input change
      />
      {/* Button to add the task */}
      <button className='add-task-button' onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
