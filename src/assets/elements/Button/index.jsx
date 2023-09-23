import React from "react";

export const Button = ({ variant, children, ...props }) => {
  let buttonClass = "p-2 rounded-md flex-1";

  if (variant === "primary") {
    buttonClass += " bg-blue-500 text-white";
  } else if (variant === "secondary") {
    buttonClass += " bg-red-500 text-white";
  } else if (variant === "default") {
    buttonClass += " bg-white text-black";
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};
