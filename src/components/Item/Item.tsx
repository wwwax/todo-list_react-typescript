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
      <label>
        <input type="checkbox" checked={false} />
        <span className={styles.title}>{todo.title}</span>
      </label>

      <div className={styles.btns}>
        <button>edit</button>
        <button onClick={() => removeTodo(todo.id)}>delete</button>
      </div>
    </div>
  );
};

export default Item;
