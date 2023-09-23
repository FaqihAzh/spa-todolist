import React, { useState } from "react";
import { Button } from "../../elements/Button";

export const AddTaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <textarea
        rows={4}
        cols={30}
        className="focus:outline-none rounded-md p-2 placeholder:italic"
        placeholder="Input your new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="primary" onClick={handleAddTask}>
        Add new task
      </Button>
    </div>
  );
};
