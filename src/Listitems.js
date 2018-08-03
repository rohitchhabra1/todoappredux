import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { requestGetTodo, requestToggleTodo } from "./Actions";
import map from "lodash/map";

class Listitems extends React.Component {
  componentWillMount() {
    this.props.getTodo();
  }
  render() {
    if (this.props.data == null) {
      return <p>nothing to show</p>;
    };
    const listitem = map(this.props.data, (item, index) => (
      <li className="listli" key={index}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => this.props.toggleTodo(item.id) }
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
  data: state.data
});
const mapDispatchToProps = dispatch => ({
  getTodo: () => dispatch(requestGetTodo()),
  toggleTodo: (id) => dispatch(requestToggleTodo(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listitems);
