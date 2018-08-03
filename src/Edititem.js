import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { requestEditTodo } from "./Actions";
import _ from "lodash";

class Edititem extends React.Component {
  constructor({ match }) {
    super();
    this.input = match.params.id;
    this.state = { value: "" };
  }
  componentWillMount() {
    _.forEach(this.props.data, (item, index) => {
      if (this.input == item.id) {
        this.setState({ value: item.text });
      }
    });
  }
  handleSubmit = () => {
      this.props.editTodo({ text: this.state.value, id: this.input });
  };
  render() {
    if (this.props.isES) {
      return <Redirect to="/listtodo" />;
    }
    return (
      <div>
        <h4>Edit item at {this.input}:</h4>
        <input
          type="text"
          value={this.state.value}
          onChange={event => {
            this.setState({ value: event.target.value });
          }}
        />
        {this.state.value &&
        <button onClick={this.handleSubmit}>Click</button>
        }
      </div>
    );
  }
}
const mapStateToProps = state => ({
  data: state.data,
  isES: state.isEditSuccess
});
const mapDispatchToProps = dispatch => ({
  editTodo: payload => dispatch(requestEditTodo(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edititem);
