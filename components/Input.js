import React from "react";

const Input = ({ placeholder, value, onchange }) => {
  return (
    <input
      value={value}
      onChange={onchange}
      required
      className="px-4 py-2 border border-black rounded-lg text-center"
      placeholder={placeholder || "placeholder text here"}
    ></input>
  );
};

export default Input;
