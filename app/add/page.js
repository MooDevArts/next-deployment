"use client";
import React, { useState } from "react";
import Button from "@/components/Button";
import MenuAdd from "@/components/MenuAdd";
import Input from "@/components/Input";

const page = () => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");

  return (
    <main className="min-h-screen flex flex-col pt-36 items-center gap-2 relative">
      <Input
        value={name}
        onchange={async (e) => {
          await setname(e.target.value);
        }}
        placeholder="Name"
      />
      <Input
        value={description}
        onchange={async (e) => {
          await setdescription(e.target.value);
        }}
        placeholder="Description"
      />
      <MenuAdd name={name} description={description} />
    </main>
  );
};

export default page;
