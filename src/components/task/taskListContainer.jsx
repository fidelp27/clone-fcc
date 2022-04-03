import React, { useEffect, useState } from "react";
import Container from "./container";
import "./task.css";
import TaskList from "./taskList";

const TaskListContainer = () => {
  const [list, setList] = useState([]);
  const [totalTask, setTotalTask] = useState(0);
  const [completedTask, setCompletedTask] = useState(0);
  const [word, setWord] = useState();

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const newArrTask = [task, ...list];
      setList(newArrTask);
    }
  };

  const deleteTask = (id) => {
    const newArrTask = list.filter((e) => e.id !== id);
    setList(newArrTask);
  };

  const completeTask = (id) => {
    const newArrTask = list.map((elem) => {
      if (elem.id === id) {
        elem.complete = !elem.complete;
      }
      return elem;
    });
    setList(newArrTask);
  };

  const totalCompleted = (a) => {
    const newList = a.filter((e) => e.complete);
    setCompletedTask(newList.length);
  };

  let newArr = [];

  if (word && word.length >= 1) {
    newArr = list.filter((elem) => {
      console.log(elem);
      const searchedWord = word.toLowerCase();
      const taskText = elem.text.toLowerCase();
      return taskText.includes(searchedWord);
    });
  } else {
    newArr = [...list];
  }

  useEffect(() => {
    setTotalTask(list.length);
    totalCompleted(list);
  }, [list]);

  return (
    <div className="global-container">
      <Container addTask={addTask} word={word} setWord={setWord} />
      {list && list.length > 0 ? (
        <div className="task-list-container">
          <h1>
            Tareas completadas: {completedTask} de {totalTask}{" "}
          </h1>

          <TaskList
            tasks={list}
            deleteTask={deleteTask}
            completeTask={completeTask}
            newArr={newArr}
          />
        </div>
      ) : (
        <div
          style={{
            marginLeft: "4rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
            letterSpacing: "2px",
            color: "white",
          }}
        >
          No hay tareas pendientes
        </div>
      )}
    </div>
  );
};
export default TaskListContainer;
