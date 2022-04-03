import React from "react";
import SearchTask from "./searchTask";
import TaskForm from "./taskForm";
import "./task.css";

const Container = ({ addTask, word, setWord }) => {
  return (
    <div className="container">
      <div className="addTask">
        <TaskForm addTask={addTask} word={word} setWord={setWord} />
      </div>
      <img src="https://i.imgur.com/lBvKMZ3.jpg" alt="img" />
      <div className="findTask">
        <SearchTask setWord={setWord} />
      </div>
    </div>
  );
};

export default Container;
