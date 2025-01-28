import React from "react";
import Button from "@/components/Button";
import { ToastContainer, toast } from "react-toastify";

const Menu = () => {
  return (
    <div className="absolute bottom-40 right-4">
      <Button href="/add" color="green" text="Add"></Button>
      <ToastContainer />
    </div>
  );
};

export default Menu;
