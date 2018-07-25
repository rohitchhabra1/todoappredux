import Listitems from "./Listitems";
import { toggleTodo, editTodo } from "./Actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  todo: state.todo
});
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  editTodo: (text, id) => dispatch(editTodo(text, id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listitems);
