import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {

  const location = useLocation()

  const navbar = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Courses",
      path: "/Courses",
    },
    {
      label: "Announcement",
      path: "/Announcement",
    },
    {
      label: "About Us",
      path: "/AboutUs",
    },
    {
      label: "Contact Us",
      path: "/ContactUs",
    },
  ];

  return (
    <nav className="w-full fixed flex justify-between px-10 h-[5rem] items-center bg-white shadow-sm shadow-gray-400 z-10">
      <div className="max-w-[5rem]">
        <img src="/Logo.png" alt="Stellar Academy" className="w-full" />
      </div>
      <ul className="flex gap-x-16">
        {navbar.map((navlink, index) => (
          <li className="group text-[0.9rem] font-normal text-gray-600 " key={index}>
            <Link
              to={navlink.path}
              className={ location.pathname === navlink.path ? "text-[#DC3332] relative" : " relative group-hover:text-[#DC3332]"}
            >
              {navlink.label}
              <span className={`absolute h-1 ${location.pathname === navlink.path ? 'w-full' : 'w-0 group-hover:w-full'} rounded-full transition-all duration-500 ease-in-out bg-[#DC3332] -bottom-2 left-0`}></span>
            </Link>
          </li>
        ))}
      </ul>
      <Button label="Apply Now" />
    </nav>
  );
}
