import React from "react";
import { Task } from "../Task";

export const TaskList = ({ tasks, toggleTask, editTask, deleteTask }) => {
  const taskData = tasks.reverse();

  return (
    <ul className="task-list max-h-[17.6rem] overflow-y-auto gap-2 flex flex-col items-center">
      {taskData.map((task) => (
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
