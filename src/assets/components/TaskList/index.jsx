import React from "react";
import { Task } from "../Task";

export const TaskList = ({ tasks, toggleTask, editTask, deleteTask }) => {

  return (
    <ul className="task-list max-h-[17.6rem] overflow-y-auto gap-2 flex flex-col items-center">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTask={() => toggleTask(task.id)}
          editTask={editTask}
          deleteTask={() => deleteTask(task.id)}
        />
      ))}
    </ul>
  );
};
