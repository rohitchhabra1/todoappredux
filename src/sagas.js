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
    if (response && (response.status == "200" || response.status == "304")) {
      yield put(actions.successAddTodo(response.data));
    } else if (response && response.error === 1) {
      yield put(actions.errorAddTodo("error"));
    }
  } catch (error) {
    yield put(actions.errorAddTodo("error"));
  }
}
function* getData(action) {
  try {
    const response = yield call(callAxios, "todo", "GET");
    if (response && (response.status == "200" || response.status == "304")) {
      yield put(actions.successGetTodo(response.data));
    } else if (response && response.error === 1) {
      yield put(actions.errorGetTodo("error"));
    }
  } catch (error) {
    yield put(actions.errorGetTodo("error"));
  }
}
function* toggleData(action) {
  try {
    const response = yield call(
      callAxios,
      "todo/" + action.payload.id,
      "PUT",
      action.payload
    );
    if (response && (response.status == "200" || response.status == "304")) {
      yield all([getData({ type: "REQUEST_GET_TODO" })]);
      //yield put(actions.successToggleTodo(response.data));
    } else if (response && response.error === 1) {
      yield put(actions.errorToggleTodo("error!!!"));
    }
  } catch (error) {
    yield put(actions.errorToggleTodo("error!!!"));
  }
}

function* editData(action) {
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
    if (response && (response.status == "200" || response.status == "304")) {
      yield put(actions.successEditTodo(response.data));
    } else if (response && response.error === 1) {
      yield put(actions.errorEditTodo("error!!!"));
    }
  } catch (error) {
    yield put(actions.errorEditTodo("error!!!"));
  }
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
