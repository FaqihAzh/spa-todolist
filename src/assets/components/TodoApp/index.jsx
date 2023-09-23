import React from "react";
import { AddTaskForm } from "../TaskAdd";
import { TaskFilter } from "../TaskFilter";
import data from "../../../utils/constants/data";
import { TaskSearch } from "../TaskSearch";
import { useTasks } from "../../features";
import { TaskList } from "../TaskList";
import { Button } from "../../elements/Button";

export const TodoApp = () => {
  const {
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
  } = useTasks(data);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-12 ">
      <h1 className="font-semibold text-4xl">
        <span className="text-red-600">TO</span>
        <span className="text-blue-600">DO </span>LIST
      </h1>
      <div className="w-3/4 flex flex-col lg:flex-row justify-center lg:justify-around gap-4">
        <div className="w-max-2/4">
          <div className="flex flex-col gap-4 w-full">
            <TaskSearch
              search={search}
              setSearch={setSearch}
              setFilter={setFilter}
            />{" "}
            <AddTaskForm addTask={addTask} />
          </div>
        </div>
        <div className="sm:w-full lg:w-2/4 flex flex-col">
          <TaskFilter filter={filter} setFilter={setFilter} search={search} />
          <TaskList
            tasks={filterTasks()}
            toggleTask={toggleTask}
            editTask={editTask}
            deleteTask={deleteTask}
          />
          <div className="mt-4 flex gap-4 ">
            <Button variant="secondary" onClick={deleteCompleteTasks}>
              Delete done task
            </Button>
            <Button variant="secondary" onClick={deleteAllTasks}>
              Delete all task
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
