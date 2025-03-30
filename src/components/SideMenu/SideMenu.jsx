import React, {useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function SideMenu({ navbarLinks, sideMenu, setSideMenu }) {

  const location = useLocation()
  const menuRef = useRef(null)

  useEffect(() => {

      setSideMenu(false)

  },[location.pathname])


  useEffect(() => {

    const handleOutsiteClick = (event) => {
       
      if(menuRef.current && !menuRef.current.contains(event.target)){
        setSideMenu(false)
      }
    }
     
    if(sideMenu){
      document.addEventListener("mousedown", handleOutsiteClick)
    }
    
    return(() => document.removeEventListener("mousedown", handleOutsiteClick))
 
  },[sideMenu])

  return (
    <div
      ref={menuRef}
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
            <Link to={links.path}>{links.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
