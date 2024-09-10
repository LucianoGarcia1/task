"use client";
import Link from "next/link";
import { useState } from "react";
import {
  MdOutlineTaskAlt,
  MdOutlineMenu,
  MdOutlineClose,
} from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";

export const Header = () => {
  const [menu, setMenu] = useState("hidden");

  const handleMenu = () => {
    if (menu === "hidden") {
      setMenu("flex");
    } else if (menu === "flex") {
      setMenu("hidden");
    }
  };

  return (
    <header className="w-full flex justify-between items-center p-5">
      <div>
        <Link href="/" className="text-medium flex items-center gap-2">
          <span className="text-green">
            <MdOutlineTaskAlt />
          </span>
          Task
        </Link>
      </div>
      <nav>
        <button
          className="md:hidden text-medium transition-all"
          onClick={handleMenu}
        >
          {menu === "hidden" ? <MdOutlineMenu /> : <MdOutlineClose />}
        </button>
        <ul
          className={`md:flex md:flex-row md:static md:bg-transparent md:justify-center md:items-center md:gap-5 md:p-0 md:text-black text-small absolute ${menu} flex-col left-0 right-0 bg-green mt-5 text-white p-5 gap-2 transition-all`}
        >
          <li>
            <Link
              href="/"
              className="md:hover:pl-0 md:py-1 md:flex block py-3 transition-all hover:text-green hover:bg-white hover:pl-5 rounded-md"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="md:hover:pl-0 md:py-1 md:flex block py-3 transition-all hover:text-green hover:bg-white hover:pl-5 rounded-md"
            >
              Login
            </Link>
          </li>

          <li className="md:ml-7">
            <Link
              href="/register"
              className="border md:border-green md:text-green border-white text-white rounded-md py-3 px-5 flex items-center gap-4"
            >
              Register
              <span className="text-icon">
                <FaRegCircleUser />
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
