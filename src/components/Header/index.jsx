/* eslint-disable react/prop-types */
import { useState } from "react";
import todoLogo from "../../assets/todoLogo.svg";
import styles from "./header.module.css";
import { MdOutlineAddTask } from "react-icons/md";

export function Header({ onAddTask }) {
  const [ title, setTitle ] = useState("");

  function handleSubmit(event) {
    event.preventDefault()
    onAddTask(title);
    setTitle('')
  }

  function onChangeTitle(event) {
    setTitle(event.target.value)
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="logo image" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input type="text" placeholder="Agrega una tarea nueva" value={title} onChange={onChangeTitle} />
        <button>
          Agregar <MdOutlineAddTask size={20} />
        </button>
      </form>
    </header>
  );
}
