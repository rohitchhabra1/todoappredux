import React from "react";
import Welcome from "./Welcome";
import ContainsListitems from "./ContainsListitems";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <h3>TodoApp</h3>
        <ContainsListitems />
        <Welcome />
      </div>
    </div>
  );
};

export default App;
