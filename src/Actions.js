import { createAction } from "redux-actions";
import constants from "./constants";

export const requestAddTodo = createAction(constants.REQUEST_ADD_TODO);
export const successAddTodo = createAction(constants.SUCCESS_ADD_TODO);
export const errorAddTodo = createAction(constants.ERROR_ADD_TODO);

export const requestGetTodo = createAction(constants.REQUEST_GET_TODO);
export const successGetTodo = createAction(constants.SUCCESS_GET_TODO);
export const errorGetTodo = createAction(constants.ERROR_GET_TODO);

export const requestEditTodo = createAction(constants.REQUEST_EDIT_TODO);
export const successEditTodo = createAction(constants.SUCCESS_EDIT_TODO);
export const errorEditTodo = createAction(constants.ERROR_EDIT_TODO);

export const requestToggleTodo = createAction(constants.REQUEST_TOGGLE_TODO);
export const successToggleTodo = createAction(constants.SUCCESS_TOGGLE_TODO);
export const errorToggleTodo = createAction(constants.ERROR_TOGGLE_TODO);

