import Axios from "axios";
import { all, call, takeLatest, takeEvery, put } from "redux-saga/effects";
import constants from "./constants";
import * as actions from "./Actions";

function callAxios(url, method, data) {
  const baseurl = "http://localhost:3001/";
  const URL = baseurl + url;
  if (method == "POST") {
    return Axios.post(URL, data);
  } else if (method == "GET") {
    return Axios.get(URL);
  } else if (method == "DELETE") {
    return Axios.delete(URL);
  } else {
    return Axios.put(URL, data);
  }
}
function* addData(action) {
  const data = {
    id: action.payload.id,
    text: action.payload.text,
    completed: false
  };
  const response = yield call(callAxios, "todo", "POST", data);
  if (response) {
    yield put(actions.successaddtodo(response.data));
  } else {
    yield put(actions.erroraddtodo("error"));
  }
}
function* getData(action) {
  const response = yield call(callAxios, "todo", "GET");
  if (response) {
    yield put(actions.successgettodo(response.data));
  } else {
    yield put(actions.errorgettodo("error"));
  }
}
function* editData(action) {
  if (action.payload.text=='') {
    const response = yield call(
      callAxios,
      "todo/" + action.payload.id,
      "DELETE"
    );
    if (response) {
      yield put(actions.successedittodo(response.data));
    } else {
      yield put(actions.erroredittodo("error!!!"));
    }
  } else {
    const data = {
      id: action.payload.id,
      text: action.payload.text,
      completed: false
    };

    const response = yield call(
      callAxios,
      "todo/" + action.payload.id,
      "PUT",
      data
    );
    if (response) {
      yield put(actions.successedittodo(response.data));
    } else {
      yield put(actions.erroredittodo("error!!!"));
    }
  }
}
function* toggleData(action){
  
}
function* watchData() {
  console.log("watching DATA");
  yield takeLatest(constants.REQUEST_ADD_TODO, addData);
  yield takeLatest(constants.REQUEST_GET_TODO, getData);
  yield takeLatest(constants.REQUEST_EDIT_TODO, editData);
  yield takeLatest(constants.REQUEST_TOGGLE_TODO, toggleData);
  
}
export default function* rootSaga() {
  yield all([watchData()]);
}
