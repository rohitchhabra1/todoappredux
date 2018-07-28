import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>TodoApp</h3>
          <ul>
            <li>
              <Link to="/">AddTodo</Link>
            </li>
            <li>
              <Link to="/listtodo">ListTodo</Link>
            </li>
          </ul>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default App;
