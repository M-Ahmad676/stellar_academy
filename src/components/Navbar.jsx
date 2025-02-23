import React, {useState} from "react";
import { FiMenu } from "react-icons/fi"
import { Link, useLocation } from "react-router-dom";
import SideMenu from "./SideMenu/SideMenu";
import Button from "./Button";
import { IoIosHome } from "react-icons/io"
import { HiSpeakerphone } from "react-icons/hi"
import { FaPhoneAlt } from "react-icons/fa"
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { ImBooks } from "react-icons/im"

export default function Navbar() {

  const location = useLocation()
  const [sideMenu, setSideMenu] = useState(false)
   
  const ToggleSideMenu = () => {
      
    setSideMenu(!sideMenu)

  }

  const navbar = [
    {
      label: "Home",
      path: "/",
      icon: <IoIosHome/>
    },
    {
      label: "Courses",
      path: "/Courses",
      icon: <ImBooks/>
    },
    {
      label: "Announcement",
      path: "/Announcement",
      icon: <HiSpeakerphone/>

    },
    {
      label: "About Us",
      path: "/AboutUs",
      icon: <BsFillQuestionCircleFill/>
    },
    {
      label: "Contact Us",
      path: "/ContactUs",
      icon: <FaPhoneAlt/>
    },
  ];

  return (
    <nav className="w-full fixed flex justify-between px-4 min-[500px]:px-10 h-[5rem] items-center bg-white shadow-sm shadow-gray-400 z-10">

        <FiMenu className="block lg:hidden text-[1.8rem] sm:text-[2rem]" onClick={ToggleSideMenu}/>
        <SideMenu navbarLinks={navbar} sideMenu={sideMenu} />

      <div className="max-w-[4rem] sm:max-w-[5rem] ml-16 lg:pl-0">
        <img src="/Logo.png" alt="Stellar Academy" className="w-full" />
      </div>
      <ul className="hidden lg:flex gap-x-16">
        {navbar.map((navlink, index) => (
          <li className="group text-[0.9rem] font-normal text-gray-600 " key={index}>
            <Link
              to={navlink.path}
              className={ location.pathname === navlink.path ? "text-orange-500 relative" : " relative group-hover:text-orange-500"}
            >
              {navlink.label}
              <span className={`absolute h-1 ${location.pathname === navlink.path ? 'w-full' : 'w-0 group-hover:w-full'} rounded-full transition-all duration-500 ease-in-out bg-orange-500 -bottom-2 left-0`}></span>
            </Link>
          </li>
        ))}
      </ul>
      <Button label="Apply Now" />
    </nav>
  );
}
