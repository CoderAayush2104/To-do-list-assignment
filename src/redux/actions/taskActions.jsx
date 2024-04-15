// taskActions.js

// Action creator function to add a new task
export const addTask = (text) => ({
  type: 'ADD_TASK', // Action type for adding a task
  payload: {
    id: new Date().getTime(), // Generate unique task ID
    text, // Text of the task
    completed: false, // New tasks are not completed by default
  },
});

// Action creator function to delete a task
export const deleteTask = (id) => ({
  type: 'DELETE_TASK', // Action type for deleting a task
  payload: id, // ID of the task to be deleted
});

// Action creator function to toggle the completion status of a task
export const toggleTask = (id) => ({
  type: 'TOGGLE_TASK', // Action type for toggling task completion
  payload: id, // ID of the task to be toggled
});
