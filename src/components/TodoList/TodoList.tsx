import React from "react";
import Item from "../Item";
import styles from "./TodoList.module.css";
import { TodoItem } from "../../types";

type Props = {
  todos: TodoItem[];
  removeTodo: (id: string) => void;
};

const TodoList: React.FC<Props> = ({ todos, removeTodo }) => {
  if (todos.length === 0) {
    return <h2 className={styles.empty}>The list is empty...</h2>;
  }

  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default TodoList;
