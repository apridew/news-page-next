"use client";

import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import NavbarItem from "./NavbarItem";
import Link from "next/link";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sport",
  "technology",
];

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav>
      <NavbarItem categories={categories} />
      <div
        className="text-2xl text-slate-700 font-bold inline md:hidden "
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? <IoMdClose /> : <CiMenuBurger />}
      </div>
      {/* Mobile Navbar */}
      {openNav && (
        <div className="sm:hidden flex flex-col text-sm uppercase absolute top-20 w-screen left-0 text-center py-4 pe-2  bg-slate-400 z-20">
          {categories.map((category) => (
            <Link
              className="text-white hover:bg-slate-500 transition duration-300 h-full w-full p-3"
              key={category}
              href={`#${category}`}
            >
              {category}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
