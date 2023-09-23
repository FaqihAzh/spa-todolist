import { useState } from "react";

export function useTasks(initialTasks) {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const addTask = (task) => {
    setTasks([
      { id: Date.now(), task, complete: false, editing: false },
      ...tasks,
    ]);
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, complete: !task.complete };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const editTask = (taskId, newText, editing = false) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, task: newText, editing };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const deleteCompleteTasks = () => {
    const updatedTasks = tasks.filter((task) => !task.complete);
    setTasks(updatedTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const filterTasks = () => {
    let filteredTasks = tasks;

    if (filter === "todo") {
      filteredTasks = filteredTasks.filter((task) => !task.complete);
    } else if (filter === "done") {
      filteredTasks = filteredTasks.filter((task) => task.complete);
    } else if (filter === search) {
      filteredTasks = filteredTasks.filter((task) =>
        task.task.toLowerCase().includes(search.toLowerCase())
      );
    } else if (filter !== search) {
      filteredTasks = tasks;
    }

    return filteredTasks;
  };

  return {
    tasks,
    addTask,
    toggleTask,
    editTask,
    deleteTask,
    deleteCompleteTasks,
    deleteAllTasks,
    filter,
    setFilter,
    search,
    setSearch,
    filterTasks,
  };
}
