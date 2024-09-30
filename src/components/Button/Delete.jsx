"use client";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

export const ButtonDelete = ({ click, title }) => {
  return (
    <button onClick={click} className="text-medium text-red z-50" title={title}>
      <MdDeleteOutline />
    </button>
  );
};
