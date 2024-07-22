import useTodoStore from "../store/store.js";
import TodoCard from "../todoCard";
import "./todolist.css";

export default function TodoList() {
  const todoList = useTodoStore((state) => state.todoList);

  return (
    <div className="todoList">
      {todoList.map((todo, index) => (
        <TodoCard key={index} todo={todo.todo} endDate={todo.endDate} />
      ))}
    </div>
  );
}
