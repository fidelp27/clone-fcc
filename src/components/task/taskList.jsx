import React from "react";
import Task from "./task";

const TaskList = ({ tasks, deleteTask, completeTask, newArr }) => {
  return (
    <>
      {React.Children.toArray(
        newArr.map((elem) => {
          return (
            <Task
              elem={elem}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })
      )}
    </>
  );
};
export default TaskList;
