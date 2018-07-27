import React from "react";
import { Redirect } from "react-router-dom";

export default class Edititem extends React.Component {
  constructor({ todo, match, editTodo }) {
    super();
    this.editTodo = editTodo;
    this.input = match.params.id;
    this.state = todo[this.input];
  }
  render() {
    if (this.input) {
      if (!this.state) return <Redirect to="/listtodo" />;
      if (!this.state.text) return <Redirect to="/listtodo" />;
    }
    return (
      <div>
        <h4>Edit item at {this.input}:</h4>
        <form>
          <input
            type="text"
            value={this.state.text}
            onChange={event => {
              this.setState({ text: event.target.value });
              this.editTodo(event.target.value, this.input);
            }}
          />
          Make Changes and Goto List Page
        </form>
      </div>
    );
  }
}
