import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  const navbar = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Courses",
      path: "/",
    },
    {
      label: "Announcement",
      path: "/",
    },
    {
      label: "About Us",
      path: "/AboutUs",
    },
    {
      label: "Contact Us",
      path: "/",
    },
  ];

  return (
    <nav className="w-full fixed flex justify-between px-10 h-[5rem] items-center bg-white shadow-sm shadow-gray-400 z-10">
      <div className="max-w-[5rem]">
        <img src="/Logo.png" alt="Stellar Academy" className="w-full" />
      </div>
      <ul className="flex gap-x-16">
        {navbar.map((navlink, index) => (
          <li className="group" key={index}>
            <NavLink
              to={navlink.path}
              className="relative group-hover:text-[#DC3332]"
            >
              {navlink.label}
              <span className="absolute h-1 w-0 rounded-full transition-all duration-500 ease-in-out bg-[#DC3332] -bottom-2 left-0 group-hover:w-full"></span>
            </NavLink>
          </li>
        ))}
      </ul>
      <Button label="Apply Now" />
    </nav>
  );
}
