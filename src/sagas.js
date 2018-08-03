import { all, call, takeLatest, takeEvery, put } from "redux-saga/effects";
import constants from "./constants";
import * as actions from "./Actions";
import callAxios from "./services/callAxios";

function* addData(action) {
  const data = {
    id: action.payload.id,
    text: action.payload.text,
    completed: false
  };
  try {
    const response = yield call(callAxios, "todo", "POST", data);
    if (response) {
      yield put(actions.successAddTodo(response.data));
    } else {
      yield put(actions.errorAddTodo("error"));
    }
  } catch (error) {
    console.log(error);
  }
}
function* getData(action) {
  try {
    const response = yield call(callAxios, "todo", "GET");
    if (response) {
      yield put(actions.successGetTodo(response.data));
    } else {
      yield put(actions.errorGetTodo("error"));
    }
  } catch (error) {
    console.log(error);
  }
}
function* toggleData(action) {
  console.log('toggledata');
  
  try {
    const response = yield call(
      callAxios,
      "todo/" + action.payload.id,
      "PUT",
      action.payload
    );
    if (response) {
      console.log(response);
      yield put(actions.successToggleTodo(response.data));
    } else {
      yield put(actions.errorToggleTodo("error!!!"));
    }
  } catch (error) {
    console.log(error);
  }
}

function* editData(action) {
  /* if (action.payload.text == "") {
    try {
      const response = yield call(
        callAxios,
        "todo/" + action.payload.id,
        "DELETE"
      );
      if (response) {
        yield put(actions.successEditTodo(response.data));
      } else {
        yield put(actions.errorEditTodo("error!!!"));
      }
    } catch (error) {
      console.log(error);
    }
  } else { */
  const data = {
    id: action.payload.id,
    text: action.payload.text,
    completed: false
  };
  try {
    const response = yield call(
      callAxios,
      "todo/" + action.payload.id,
      "PUT",
      data
    );
    if (response) {
      yield put(actions.successEditTodo(response.data));
    } else {
      yield put(actions.errorEditTodo("error!!!"));
    }
  } catch (error) {
    console.log(error);
  }
  /*  } */
}
function* watchData() {
  yield takeLatest(constants.REQUEST_ADD_TODO, addData);
  yield takeLatest(constants.REQUEST_GET_TODO, getData);
  yield takeLatest(constants.REQUEST_EDIT_TODO, editData);
  yield takeLatest(constants.REQUEST_TOGGLE_TODO, toggleData);
}
export default function* rootSaga() {
  yield all([watchData()]);
}
