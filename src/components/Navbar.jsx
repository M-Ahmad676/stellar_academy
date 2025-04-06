import React, {useState, useRef,useEffect} from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()
  const menuRef = useRef(null) 
  const menuIconRef = useRef(null)

  const ToggleSideMenu = () => {
      
    setSideMenu(!sideMenu)

  }

  useEffect(() => {

    const handleOutsiteClick = (event) => {
       
      if(menuRef.current && !menuRef.current.contains(event.target) && menuIconRef.current && !menuIconRef.current.contains(event.target)){
        setSideMenu(false)
      }
    }
     
    if(sideMenu){
      document.addEventListener("mousedown", handleOutsiteClick)
    }
    
    return(() => document.removeEventListener("mousedown", handleOutsiteClick))
 
  },[sideMenu])

  const handleApplyNow = () => {

    navigate('/Enrollment')

  }

  const navbar = [
    {
      label: "Home",
      path: "/",
      icon: <IoIosHome/>
    },
    {
      label: "Programs",
      path: "/Programs",
      icon: <ImBooks/>
    },
    {
      label: "Announcements",
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
    <nav className="w-full fixed flex justify-between px-4 min-[500px]:px-10 h-[5rem] items-center bg-white shadow-sm shadow-gray-400 z-20">
        <div ref={menuIconRef} className="block lg:hidden">
        <FiMenu className="text-[1.8rem] sm:text-[2rem]" onClick={ToggleSideMenu} />
        </div>
        <SideMenu navbarLinks={navbar} sideMenu={sideMenu} setSideMenu={setSideMenu} menuRef={menuRef}/>

      <div className="max-w-[4rem] sm:max-w-[5rem] ml-13 lg:pl-0">
        <img src="/Logo.webp" alt="Stellar Academy" className="w-full" />
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
      <Button label="Apply Now" action={handleApplyNow}/>
    </nav>
  );
}
