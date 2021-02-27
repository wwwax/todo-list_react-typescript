import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoItem } from "../../types";
import styles from "./Editor.module.css";

type Props = {
  addTodo: (item: TodoItem) => void;
};

const Editor: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      setText("");
      alert("The field cannot be empty");
      return;
    }

    const newTodo = {
      title: text,
      id: uuidv4(),
    };

    addTodo(newTodo);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        onChange={handleInputChange}
        type="text"
        value={text}
        placeholder="Todo"
      />
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
};

export default Editor;
