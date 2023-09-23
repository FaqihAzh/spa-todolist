import React from "react";
import { Button } from "../../elements/Button";
import { TextInput } from "../../elements/Form";

export const TaskSearch = ({ search, setSearch, setFilter }) => {
  const handleReset = () => {
    setFilter("all");
    setSearch("");
  };
  return (
    <div className="flex flex-col  gap-2">
      <TextInput
        variant="default"
        type="text"
        placeholder="Search tasks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex gap-2">
        <div className="flex w-3/4">
          <Button variant="primary" onClick={() => setFilter(search)}>
            Search
          </Button>
        </div>
        <div className="flex w-1/4">
          <Button variant="secondary" onClick={() => handleReset()}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};
