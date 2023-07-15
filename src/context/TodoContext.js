import { createContext, useContext, useEffect, useState } from "react";

/*
  todos:todo[]
  create(todo):
 */
const TodoContext = createContext(null);

export const useTodo = () => useContext(TodoContext);

export function TodoProvider({ children, todoService }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    todoService.get().then((data) => setTodos(data));
  }, [setTodos, todoService]);

  const create = async (todo) => {
    const todoData = await todoService.create(todo);
    setTodos((prev) => [...prev, todoData]);
  };

  return (
    <TodoContext.Provider value={{ todos, create }}>
      {children}
    </TodoContext.Provider>
  );
}
