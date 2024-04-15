// taskReducer.js

// Define initial state for the task reducer
const initialState = {
  tasks: [], // Array to store tasks
};

// Define the task reducer function
const taskReducer = (state = initialState, action) => {
  // Switch statement to handle different action types
  switch (action.type) {
    // Case for adding a new task
    case "ADD_TASK":
      return {
        ...state,
        // Add the new task to the tasks array
        tasks: [...state.tasks, action.payload],
      };
    // Case for deleting a task
    case "DELETE_TASK":
      return {
        ...state,
        // Remove the task with the specified ID from the tasks array
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    // Case for toggling the completion status of a task
    case "TOGGLE_TASK":
      return {
        ...state,
        // Toggle the completion status of the task with the specified ID
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    // Default case returns the current state if the action type is not recognized
    default:
      return state;
  }
};

// Export the taskReducer function as the default export
export default taskReducer;
