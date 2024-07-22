import create from "zustand";

const useTodoStore = create((set) => ({
  todoList: [],
  addTodo: (todo) => set((state) => ({ todoList: [...state.todoList, todo] })),
}));

export default useTodoStore;
