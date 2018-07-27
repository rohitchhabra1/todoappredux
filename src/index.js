import { createStore } from "redux";
import { TodoApp } from "./Reducers";
import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ContainsListitems from "./ContainsListitems";
import Welcome from "./Welcome";
import ContainsEdititem from "./ContainsEdititem";

const store = createStore(TodoApp);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path='/' component={Welcome}/>
        <Route path='/listtodo' component={ContainsListitems}/>{/* 
        <Route path='/edittodo' component={ContainsEdititem}/> */}
        <Route path='/edittodo/:id' component={ContainsEdititem} />
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
