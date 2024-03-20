"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className="fixed top-[20px] left-0 w-full z-50">
      <div className="nav container flex justify-between items-center bg-textColor rounded-3xl py-[17px] px-[20px]">
        <Link href="" className="logo text-[1.4rem] bold text-containerCOlor">
          Mocado
        </Link>
        <div className="navbar flex items-center gap-x-6">
          <Link
            href="#home"
            className="nav-link duration-300 hover:text-bgColor text-[0.88rem] text-textAlterColor font-poopins"
          >
            Home
          </Link>
          <Link
            href="#services"
            className="nav-link duration-300 hover:text-bgColor text-[0.88rem] text-textAlterColor font-poopins"
          >
            Services
          </Link>
          <Link
            href="#products"
            className="nav-link duration-300 hover:text-bgColor text-[0.88rem] text-textAlterColor font-poopins"
          >
            Products
          </Link>
          <Link
            href="#team"
            className="nav-link duration-300 hover:text-bgColor text-[0.88rem] text-textAlterColor font-poopins"
          >
            Team
          </Link>
          <Link
            href="#reviews"
            className="nav-link duration-300 hover:text-bgColor text-[0.88rem] text-textAlterColor font-poopins"
          >
            Reviews
          </Link>
        </div>
        <div className="nav-icons flex items-center gap-x-4 text-bgColor text-[20px]">
          <Link href="">
            <i className="bx bx-user ">
              <FaRegUser />
            </i>
          </Link>
          <Link href="">
            <i className="bx bx-shopping-bag bx1">
              <MdOutlineShoppingBag />
            </i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
