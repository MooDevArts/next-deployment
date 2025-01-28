import React, { useState } from "react";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
import { redirect } from "next/navigation";

const MenuAdd = ({ name, description }) => {
  const addTask = async (name, desc) => {
    if (!name) {
      toast("name pls");
      return;
    }
    toast("added");
    redirect("/");
  };

  return (
    <div className="absolute bottom-40 right-4">
      <div className="flex flex-col items-end gap-2">
        <button
          onClick={() => addTask(name, description)}
          className="button green"
        >
          Add
        </button>
        <Button href="/" color="yellow" text="Back"></Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MenuAdd;
