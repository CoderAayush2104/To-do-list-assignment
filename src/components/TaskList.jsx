// TaskList.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions/taskActions';
import Task from './Task';

// TaskList component displays the list of tasks
const TaskList = () => {
  // Retrieve tasks from the Redux store
  const tasks = useSelector((state) => state.tasks);
  // Redux dispatch function
  const dispatch = useDispatch();

  // Function to handle task deletion
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId)); // Dispatch action to delete task
  };

  // Function to handle toggling task completion
  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId)); // Dispatch action to toggle task completion
  };

  return (
    <div className="task-list">
      {/* Map through tasks array and render Task component for each task */}
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={handleDeleteTask} // Pass onDelete function as prop
          onToggle={handleToggleTask} // Pass onToggle function as prop
        />
      ))}
    </div>
  );
};

export default TaskList;
