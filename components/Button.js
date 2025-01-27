import React from "react";
import Link from "next/link";

const Button = ({ text, click, color, href }) => {
  let bgClass = "";

  if (color === "green") {
    bgClass = "bg-green-500"; // Adjust color intensity as needed
  } else if (color === "red") {
    bgClass = "bg-red-500"; // Adjust color intensity as needed
  } else if (color === "yellow") {
    bgClass = "bg-orange-400"; // Adjust color intensity as needed
  }
  return (
    <Link href={href || ""}>
      <button
        className={`px-4 py-1 border border-black rounded-lg ${bgClass}`}
        onClick={click}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
