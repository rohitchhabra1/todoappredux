import { connect } from "react-redux";
import Edititem from "./Edititem";
//import { editTodo } from "./Actions";

const mapStateToProps = state => ({
  todo: state.todo
});
const mapDispatchToProps = dispatch => ({
  /* editTodo: (text, id) => {
    dispatch(editTodo(text, id));
  } */
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edititem);
