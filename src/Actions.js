import { createAction } from "redux-actions";
import constants from "./constants";

export const requestaddtodo = createAction(constants.REQUEST_ADD_TODO);
export const successaddtodo = createAction(constants.SUCCESS_ADD_TODO);
export const erroraddtodo = createAction(constants.ERROR_ADD_TODO);

export const requestgettodo = createAction(constants.REQUEST_GET_TODO);
export const successgettodo = createAction(constants.SUCCESS_GET_TODO);
export const errorgettodo = createAction(constants.ERROR_GET_TODO);

export const requestedittodo = createAction(constants.REQUEST_EDIT_TODO);
export const successedittodo = createAction(constants.SUCCESS_EDIT_TODO);
export const erroredittodo = createAction(constants.ERROR_EDIT_TODO);

export const requesttoggletodo = createAction(constants.REQUEST_TOGGLE_TODO);
export const successtoggletodo = createAction(constants.SUCCESS_TOGGLE_TODO);
export const errortoggletodo = createAction(constants.ERROR_TOGGLE_TODO);

