import React from "react";
import { Button } from "../../elements/Button";

export const TaskFilter = ({ filter, setFilter, search }) => {
  return (
    <div className="flex mb-4 gap-4">
      <Button
        variant={`${
          filter === "all" ||
          filter === search ||
          (filter !== search && filter !== "done" && filter !== "todo")
            ? "primary"
            : "default"
        }`}
        onClick={() => setFilter("all")}
      >
        All
      </Button>
      <Button
        variant={`${filter === "todo" ? "primary" : "default"}`}
        onClick={() => setFilter("todo")}
      >
        Todo
      </Button>
      <Button
        variant={`${filter === "done" ? "primary" : "default"}`}
        onClick={() => setFilter("done")}
      >
        Done
      </Button>
    </div>
  );
};
