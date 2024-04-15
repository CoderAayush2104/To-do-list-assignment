// localStorage.js

// Function to retrieve tasks from local storage
export const getTasksFromStorage = () => {
  // Retrieve tasks from local storage
  const tasks = localStorage.getItem('tasks');
  // If tasks exist in local storage, parse and return them as an array; otherwise, return an empty array
  return tasks ? JSON.parse(tasks) : [];
};

// Function to save tasks to local storage
export const saveTasksToStorage = (tasks) => {
  // Convert tasks array to JSON format and save it to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
