import React from "react";
import { Link } from "react-router-dom";

const Listitems = ({ todo, toggleTodo, editTodo, match }) => {
  if (todo == null) {
    return <p>nothing to show</p>;
  }
  const listitem = todo.map((item, index) => (
    <li className="listli" key={index}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => toggleTodo(index)}
      />
      <Link to={`/edittodo/${index}`}>{item.text}</Link>
      {item.completed && <span className="badge comp">Completed</span>}
    </li>
  ));
  return (
    <div className="listdiv">
      <ul className="listul">{listitem}</ul>
    </div>
  );
};

export default Listitems;
