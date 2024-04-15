// App.js
import  { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { getTasksFromStorage, saveTasksToStorage } from './utils/localStorage';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = getTasksFromStorage();
    storedTasks.forEach((task) => dispatch({ type: 'ADD_TASK', payload: task }));
  }, [dispatch]);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  return (
    <div className="app">
      <span className="title">To Do List</span>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
