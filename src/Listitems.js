import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { requestGetTodo, requestToggleTodo } from "./Actions";
import _ from "lodash";

class Listitems extends React.Component {
  componentWillMount() {
    this.props.getTodo();
  }
  render() {
    const listitem = _.map(this.props.data, (item, index) => (
      <li className="listli" key={index}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() =>
            this.props.toggleTodo({
              text: item.text,
              id: item.id,
              completed: !item.completed
            })
          }
        />
        <Link to={`/edittodo/${item.id}`}>{item.text}</Link>
        {item.completed && <span className="badge comp">Completed</span>}
      </li>
    ));
    return (
      <div className="listdiv">
        <ul className="listul">{listitem}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  data: state.data,
  isTS: state.isToggleSuccess
});
const mapDispatchToProps = dispatch => ({
  getTodo: () => dispatch(requestGetTodo()),
  toggleTodo: id => dispatch(requestToggleTodo(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listitems);
