import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "./constants";

const defaultState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  isGL: false,
  isGS: false,
  isGE: false,
  isEditing: false,
  isEditSuccess: false,
  isEditError: false,
  message: ""
};

const requestAddTodo = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });
const successAddTodo = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false }
  });

const errorAddTodo = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload }
  });
const requestGetTodo = (state, action) =>
  update(state, {
    isGL: { $set: true },
    isGS: { $set: false },
    isGE: { $set: false }
  });
const successGetTodo = (state, action) =>
  update(state, {
    data: { $set: action.payload },
    isGL: { $set: false },
    isGS: { $set: true },
    isGE: { $set: false }
  });

const errorGetTodo = (state, action) =>
  update(state, {
    isGL: { $set: false },
    isGS: { $set: false },
    isGE: { $set: true }
  });
const requestEditTodo = (state, action) =>
  update(state, {
    isEditing: { $set: true },
    isEditSuccess: { $set: false },
    isEditError: { $set: false }
  });
const successEditTodo = (state, action) =>
  update(state, {
    data: { $set: action.payload },
    isEditing: { $set: false },
    isEditSuccess: { $set: true },
    isEditError: { $set: false }
  });

const errorEditTodo = (state, action) =>
  update(state, {
    isEditing: { $set: false },
    isEditSuccess: { $set: false },
    isEditError: { $set: true }
  });

/* const handleAddTodo = (state, { payload: { text, id } }) =>
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
}; */
export const TodoApp = handleActions(
  {
    [constants.REQUEST_ADD_TODO]: requestAddTodo,
    [constants.SUCCESS_ADD_TODO]: successAddTodo,
    [constants.ERROR_ADD_TODO]: errorAddTodo,

    [constants.REQUEST_GET_TODO]: requestGetTodo,
    [constants.SUCCESS_GET_TODO]: successGetTodo,
    [constants.ERROR_GET_TODO]: errorGetTodo,

    [constants.REQUEST_EDIT_TODO]: requestEditTodo,
    [constants.SUCCESS_EDIT_TODO]: successEditTodo,
    [constants.ERROR_EDIT_TODO]: errorEditTodo
  },
  defaultState
);
