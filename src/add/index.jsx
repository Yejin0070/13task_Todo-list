import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useTodoStore from "../store/store.js";
import "./add.css";
import "../App.css";

export default function Add() {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const navigate = useNavigate();

  const handleAdd = () => {
    addTodo({
      todo: todo,
      endDate: date,
    });
    navigate("/todoList");
  };

  return (
    <div className="toDoBox">
      <h3>Todo-list 추가</h3>
      <div className="todo">
        - ToDo:{" "}
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="할 일을 입력하세요."
        />
      </div>
      <br />
      <div className="date">
        - Date:{" "}
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="날짜를 입력하세요."
        />
      </div>
      <br />
      <button onClick={handleAdd}>확인</button>
    </div>
  );
}
