import Listitems from "./Listitems";
import { toggleTodo } from "./Actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  todo: state.todo
});
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listitems);
