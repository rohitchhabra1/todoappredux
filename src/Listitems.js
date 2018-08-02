import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { requestgettodo, requesttoggletodo } from "./Actions";
import map from "lodash/map";

class Listitems extends React.Component {
  componentWillMount() {
    this.props.gettodo();
  }
  render() {
    if (this.props.data == null) {
      return <p>nothing to show</p>;
    };
    const listitem = map(this.props.data, (item, index) => (
      <li className="listli" key={item.id}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => this.props.toggletodo(item.id) }
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
  gettodo: () => dispatch(requestgettodo()),
  toggletodo: (id) => dispatch(requesttoggletodo(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listitems);
