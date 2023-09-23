import {
  faPenToSquare,
  faTrash,
  faCheckSquare,
  faSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { TextInput } from "../../elements/Form";

export const Task = ({ task, toggleTask, editTask, deleteTask }) => {
  const [editedText, setEditedText] = useState(task.task);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleEditSave = () => {
    editTask(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center py-2 px-4 gap-4 bg-white rounded w-full">
      {isEditing ? (
        <TextInput
          variant="edit"
          type="text"
          value={editedText}
          onChange={handleEditChange}
        />
      ) : (
        <span className={`${task.complete ? "line-through" : ""}`}>
          {task.task}
        </span>
      )}
      <div>
        {isEditing ? (
          <button onClick={handleEditSave}>
            <FontAwesomeIcon icon={faCheck} className="text-green-500" />
          </button>
        ) : (
          <div className="flex gap-4 items-center">
            <button onClick={toggleTask} className="text-green-500 rounded-md">
              <FontAwesomeIcon
                icon={task.complete ? faCheckSquare : faSquare}
                className="text-green-500"
              />
            </button>
            <button onClick={() => setIsEditing(true)}>
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="text-yellow-300"
              />
            </button>
            <button onClick={deleteTask} className="text-red-500 rounded-md">
              <FontAwesomeIcon icon={faTrash} className="text-red-500" />
            </button>
          </div>
        )}
      </div>
    </li>
  );
};
