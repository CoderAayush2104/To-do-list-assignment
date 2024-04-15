// TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions/taskActions';
import Task from './Task';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={handleDeleteTask}
          onToggle={handleToggleTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
