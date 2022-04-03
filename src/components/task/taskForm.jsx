import React, { useState } from "react";
import "./task.css";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({ addTask }) => {
  const [input, setInput] = useState("");

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleInput = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false,
    };

    addTask(newTask);
    setInput("");
  };

  return (
    <form className="tarea-formulario" onSubmit={handleInput}>
      <input
        type="text"
        className="tarea-input tarea-input--border"
        placeholder="Ingresa una tarea"
        name="texto"
        value={input}
        onChange={onChangeInput}
      />
      <button className="btn-tarea" disabled={input === ""}>
        Agregar
      </button>
    </form>
  );
};

export default TaskForm;
