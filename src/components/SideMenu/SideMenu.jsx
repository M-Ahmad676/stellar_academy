import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function SideMenu({ navbarLinks, sideMenu, setSideMenu, menuRef }) {

  const location = useLocation()


  useEffect(() => {

      setSideMenu(false)

  },[location.pathname])


 

  return (
    <div
      ref={menuRef}
      className={`${
        sideMenu ? "translate-x-0" : "-translate-x-full"
      } transition-all duration-500 absolute w-[15rem] sm:w-[17rem] left-0 max-w-full h-[100vh] shadow-sm shadow-gray-400 border-r-2 border-gray-300 bg-white top-20 lg:hidden`}
    >
      <ul className="w-full h-full py-5">
        {navbarLinks.map((links, index) => (
          <Link
            key={index}
            to={links.path}
            className={`mx-2 rounded-xl p-5 flex items-center gap-x-4 ${location.pathname === links.path ? "bg-[#86c1ff2a]":"hover:bg-[#86c1ff2a]"} `}
          >
            <span className="text-[1.3rem] text-gray-600">{links.icon}</span>
            {links.label}
          </Link>
        ))}
      </ul>
    </div>
  );
}
