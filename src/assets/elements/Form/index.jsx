import React from "react";

export const TextInput = ({ variant, ...props }) => {
  let inputClass = "outline-none rounded-md";

  if (variant === "default") {
    inputClass += " p-2 flex-grow placeholder-italic";
  } else if (variant === "edit") {
    inputClass += " p-1 text-blue-500 italic w-full";
  }

  return <input {...props} className={`${inputClass}`} />;
};
