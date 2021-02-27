import React from "react";
import styles from "./TodoList.module.css";
import { TodoItem } from "../../types";

type Props = {
  todos: TodoItem[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  if (todos.length === 0) {
    return <h2 className={styles.empty}>The list is empty...</h2>;
  }

  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <div className={styles.listItem} key={todo.id}>
          {todo.title}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
