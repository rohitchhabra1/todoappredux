import { handleActions } from "redux-actions";
import { addTodo, editTodo, toggleTodo } from "./Actions";
import update from "immutability-helper";

const defaultState = { todo: [] };

const handleAddTodo = (state, { payload: { text, id } }) =>
  update(state, {
    todo: { $push: [{ id: id, text: text, completed: false }] }
  });

const handleToggleTodo = (state, { payload: { id } }) =>
  update(state, {
    todo: {
      [id]: {
        completed: {
          $apply: function(x) {
            return !x;
          }
        }
      }
    }
  });

const handleEditTodo = (state, { payload: { text, id } }) => {
  if (text === "") {
    return update(state, {
      todo: {
        $splice: [[id, 1]]
      }
    });
  } else {
    return update(state, {
      todo: {
        [id]: {
          text: { $set: text }
        }
      }
    });
  }
};
export const TodoApp = handleActions(
  {
    [addTodo]: handleAddTodo,
    [toggleTodo]: handleToggleTodo,
    [editTodo]: handleEditTodo
  },
  defaultState
);
