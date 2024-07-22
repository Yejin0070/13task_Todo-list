import React from "react";
import "./todocard.css";

const TodoCard = ({ todo, endDate }) => {
  return (
    <div className="todoCard">
      <h3>{todo}</h3>
      <p>{endDate}</p>
    </div>
  );
};

export default TodoCard;
