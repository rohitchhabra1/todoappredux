export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = (text, id) => {
  return {
    type: ADD_TODO,
    text,
    id
  };
};

export const editTodo = (text, id) => {
  return {
    type: EDIT_TODO,
    text,
    id
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};
