import React from "react";

export default function SideMenu({ navbarLinks, sideMenu }) {
  return (
    <div
      className={`${
        sideMenu ? "translate-x-0" : "-translate-x-full"
      } transition-all duration-500 absolute w-[15rem] sm:w-[17rem] left-0 max-w-full h-[100vh] shadow-sm shadow-gray-400 border-r-2 border-gray-300 bg-white top-20 lg:hidden`}
    >
      <ul className="w-full h-full py-5">
        {navbarLinks.map((links, index) => (
          <li
            key={index}
            className="mx-2 rounded-xl p-5 hover:bg-[#86c1ff2a] flex items-center gap-x-4 "
          >
            <span className="text-[1.3rem] text-gray-600">{links.icon}</span>
            <a href="/">{links.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
