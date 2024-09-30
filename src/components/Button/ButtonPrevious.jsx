"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdSkipPrevious } from "react-icons/md";

export const ButtonPrevious = ({ name, href }) => {
  const [layout, setLayout] = useState(false);

  const handleLayout = () => {
    window.innerWidth <= 720 && setLayout(true);
  };
  useEffect(() => {
    handleLayout();
  }, []);
  return (
    <Link
      className="flex items-center gap-4 px-5 py-3 border border-red rounded-md text-red text-small"
      href={href}
    >
      {layout ? null : name}
      <span className="text-icon">
        <MdSkipPrevious />
      </span>
    </Link>
  );
};
