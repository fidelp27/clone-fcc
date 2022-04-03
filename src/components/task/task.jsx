import React from "react";
import "./task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Task = ({ elem, completeTask, deleteTask }) => {
  const { id, text, complete } = elem;
  return (
    <>
      <div
        className={complete ? "task--container completada" : "task--container"}
      >
        <div className="task-text" onClick={() => completeTask(id)}>
          {text}
        </div>
        <div className="task-container-icon" onClick={() => deleteTask(id)}>
          {" "}
          <AiOutlineCloseCircle className="task-icon" />
        </div>
      </div>
    </>
  );
};
export default Task;
