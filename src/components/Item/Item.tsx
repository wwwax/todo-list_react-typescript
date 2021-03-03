import React from "react";
import { TodoItem } from "../../types";
import styles from "./Item.module.css";

type Props = {
  todo: TodoItem;
  removeTodo: (id: string) => void;
};

const Item: React.FC<Props> = ({ todo, removeTodo }) => {
  return (
    <div className={styles.item}>
      <div className={styles.title}>{todo.title}</div>
      <button onClick={() => removeTodo(todo.id)}>delete</button>
    </div>
  );
};

export default Item;
