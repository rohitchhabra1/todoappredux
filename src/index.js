import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { TodoApp } from "./Reducers";
import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Listitems from "./Listitems";
import Welcome from "./Welcome";
import Edititem from "./Edititem";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(TodoApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path="/" component={Welcome} />
        <Route path="/listtodo" component={Listitems} />
        <Route path="/edittodo/:id" component={Edititem} />
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
