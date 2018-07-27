import React from "react";
import { connect } from "react-redux";
import { addTodo } from "./Actions";

class Welcome extends React.Component {
  constructor({ dispatch }) {
    super();
    this.dispatch = dispatch;
    this.todoid = 0;
    this.state = { value: "", btn: "text" };
  }
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value === "") {
      this.setState({ btn: "error" });
      return;
    }
    this.dispatch(addTodo(this.state.value, this.todoid++));
    this.setState({ value: "" });
  };
  handleChange = e => {
    this.setState({ value: e.target.value, btn: "text" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>TODO</label>
          <input
            className={this.state.btn}
            value={this.state.value}
            onChange={this.handleChange}
            placeholder='Add Todos here...'
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect()(Welcome);
