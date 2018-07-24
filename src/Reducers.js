import { ADD_TODO, EDIT_TODO, TOGGLE_TODO } from "./Actions";
import clone from "lodash/clone";
import map from "lodash/map";
import pullAt from "lodash/pullAt";
const initialState = { todo: [] };

export const TodoApp = (state = initialState, action) => {
  let t = clone(state.todo);
  switch (action.type) {
    case ADD_TODO:
      return {
        todo: [...t, { id: action.id, text: action.text, completed: false }]
      };
    case TOGGLE_TODO:
      return {
        todo: map(t, (todo, index) => {
          if (index === action.id) {
            return Object.assign({}, todo, { completed: !todo.completed });
          }
          return todo;
        })
      };
    case EDIT_TODO:
      if (action.text === "") {
        pullAt(t, action.id);
      } else {
        t[action.id].text = action.text;
      }
      return { todo: t };
    default:
      return state;
  }
};
