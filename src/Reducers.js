import clone from "lodash/clone";
import map from "lodash/map";
import pullAt from "lodash/pullAt";
import { handleActions } from "redux-actions";
import { addTodo, editTodo, toggleTodo } from "./Actions";

const defaultState = { todo: [] };

const handleAddTodo = (state, { payload: { text, id } }) => {
  return {
    todo: [...state.todo, { id: id, text: text, completed: false }]
  };
};
const handleToggleTodo = (state, { payload: { id } }) => {
  return {
    todo: map(state.todo, (todo, index) => {
      if (index === id) {
        return Object.assign({}, todo, { completed: !todo.completed });
      }
      return todo;
    })
  };
};
const handleEditTodo = (state, { payload: { text, id } }) => {
  let t = clone(state.todo);
  if (text === "") {
    pullAt(t, id);
  } else {
    t[id].text = text;
  }
  return { todo: t };
};

export const TodoApp = handleActions(
  {
    [addTodo]: handleAddTodo,
    [toggleTodo]: handleToggleTodo,
    [editTodo]: handleEditTodo
  },
  defaultState
);
