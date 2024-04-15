// taskActions.js
export const addTask = (text) => ({
    type: 'ADD_TASK',
    payload: {
      id: new Date().getTime(),
      text,
      completed: false, // New tasks are not completed by default
    },
  });
  
  export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: id,
  });
  
  export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    payload: id,
  });
  