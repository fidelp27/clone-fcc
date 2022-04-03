import React from "react";
import { BsSearch } from "react-icons/bs";
import "./task.css";

const SearchTask = ({ setWord }) => {
  const onChangeInput = (e) => {
    setWord(e.target.value);
  };
  return (
    <form className="tarea-formulario">
      <BsSearch className="task-icon task-icon--bg" />
      <input
        type="text"
        placeholder="Ingresa la tarea que buscas"
        onChange={onChangeInput}
        className="tarea-input"
      />
    </form>
  );
};
export default SearchTask;
