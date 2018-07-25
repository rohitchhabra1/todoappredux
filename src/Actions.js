import { createActions } from "redux-actions";

export const { addTodo, editTodo, toggleTodo } = createActions({
  ADD_TODO: (text, id) => ({ text, id }),
  EDIT_TODO: (text, id) => ({ text, id }),
  TOGGLE_TODO: id => ({ id })
});
