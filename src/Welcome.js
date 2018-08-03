import React from "react";
import { connect } from "react-redux";
import { requestAddTodo } from "./Actions";

if (!localStorage.getItem("todocount")) {
  localStorage.setItem("todocount", 1);
}
class Welcome extends React.Component {
  constructor({ dispatch }) {
    super();
    this.dispatch = dispatch;
    this.todoid = localStorage.getItem("todocount");
    this.state = { value: "", btn: "text" };
  }
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value === "") {
      this.setState({ btn: "error" });
      return;
    }
    this.props.addTodo({ text: this.state.value, id: this.todoid++ });
    localStorage.setItem("todocount", this.todoid);
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
            placeholder="Add Todos here..."
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
const mapsStatetoProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  addTodo: payload => {
    dispatch(requestAddTodo(payload));
  }
});

export default connect(
  mapsStatetoProps,
  mapDispatchToProps
)(Welcome);
