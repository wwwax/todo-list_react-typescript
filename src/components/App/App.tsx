import React, { useState } from "react";
import Editor from "../Editor";
import TodoList from "../TodoList";
import { TodoItem } from "../../types";
import styles from "./App.module.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (todo: TodoItem) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1 className={styles.title}>Todo list</h1>

      <Editor addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
