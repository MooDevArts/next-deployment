import React, { useState } from "react";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
import { redirect } from "next/navigation";
import { addTask } from "@/app/actions/addtask";

const MenuAdd = ({ name, description }) => {
  const addsTask = async (name, desc) => {
    if (!name) {
      toast.error("name pls", {
        autoClose: 2000,
        theme: "dark",
      });
      return;
    }
    console.log(name, desc);
    addTask(name, desc);
    redirect("/");
  };

  return (
    <div className="absolute bottom-40 right-4">
      <div className="flex flex-col items-end gap-2">
        <button
          onClick={() => addsTask(name, description)}
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
