import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaQuoteLeft,
  FaImage,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { Link } from "react-scroll";
import { MdNightsStay, MdWbSunny } from "react-icons/md";

const Navbar = ({ darkMode, setDarkMode }) => {

  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      id: 1,
      icon: <FaHome className="text-lg" />,
      link: "home",
    },
    {
      id: 2,
      icon: <FaQuoteLeft className="text-lg" />,
      link: "about",
    },
    {
      id: 3,
      icon: <FaCode className="text-lg" />,
      link: "skills",
    },
    {
      id: 4,
      icon: <FaImage className="text-lg" />,
      link: "portfolio",
    },
    {
      id: 5,
      icon: <ImProfile className="text-lg" />,
      link: "resume",
    },
    {
      id: 6,
      icon: <FaEnvelope className="text-lg" />,
      link: "contact",
    },
  ];
  return (
    <>
      <div className="fixed w-full h-20 z-20 bg-transparent font-sans flex justify-between items-center ">
        {/* -----------------Menu Icon------------- */}
        <div className="left-nav-MenuIcon fixed z-20  px-4 py-6  ">
          <FaBars
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#f14848] cursor-pointer bg-white hover:opacity-75 px-1 text-3xl"
          />

        </div>
        {/* ----------------inner navbar----------------------- */}
        <div
          className={
            isOpen
              ? "innner-nav bg-white w-full left-0 ease-in duration-300 h-full hidden md:flex items-center md:justify-end"
              : "left-[100%] ease-in duration-500 px-[42vw]"
          }
        >
          {/* ----------------icons-------------- */}
          <div
            className={
              isOpen
                ? "icons hidden md:flex md:flex-row left-0 ease-in duration-300 flex-col items-center justify-center gap-10 px-6 py-2"
                : "hidden bg-transparent left-[-100%] ease-in duration-500"
            }
          >
            {links.map(({ id, icon, link }) => (
              <div
                key={id}
                className="home flex items-center justify-center flex-col gap-3 group "
              >
                <h1 className=" cursor-pointer group-hover:text-[#EB5424] transform transition duration-300">
                  <Link to={link} smooth duration={500}>
                    {icon}
                  </Link>
                </h1>
                <h1 className="uppercase transform transition duration-300 cursor-pointer group-hover:text-[#EB5424]  font-bold md:text-[.8vw] border-b divide-y border-dashed border-black ">
                  <Link to={link} smooth duration={500}>
                    {link}
                  </Link>
                </h1>
              </div>
            ))}
            <div onClick={() => setDarkMode(!darkMode)} className="logo cursor-pointer">
              {
                darkMode
                  ?
                  <MdWbSunny className="text-2xl text-orange-500" />
                  :
                  <MdNightsStay className="text-2xl" />

              }
            </div>

          </div>
        </div>
      </div>

      {/* -------------------mobile menu navbar-------------------------- */}

      <div
        className={
          isOpen
            ? "w-full md:hidden h-full fixed z-20 left-0 top-0  bg-gray-900/70 backdrop-blur"
            : ""
        }
      >
        {/* ------------------------Mobile Menu Inner Part-------------------------------- */}
        <div
          className={
            isOpen
              ? "w-4/5 h-full  bg-gray-900 absolute left-0 top-0 flex items-center justify-center flex-col text-white ease-in duration-500 "
              : "fixed top-0 left-[-100%]  h-full p-10 duration-300"
          }
        >
          <div onClick={() => setDarkMode(!darkMode)} className="logo cursor-pointer absolute top-6 right-4">
            {
              darkMode
                ?
                <MdWbSunny className="text-3xl text-orange-400" />
                :
                <MdNightsStay className="text-3xl" />

            }
          </div>
          <div className=" absolute top-6 left-4 ">
            <FaBars
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#f14848] cursor-pointer bg-white hover:opacity-75 px-1 text-3xl"
            />

          </div>

          <div className="flex flex-col gap-4">
            {links.map(({ id, icon, link }) => (
              <div
                key={id}
                className="home flex items-center justify-center flex-col gap-2 group "
              >
                <h1 className="cursor-pointer group-hover:text-[#EB5424] duration-200">
                  <Link onClick={() => setIsOpen(!isOpen)} to={link} smooth duration={500}>
                    {icon}
                  </Link>
                </h1>
                <h1 className="uppercase cursor-pointer group-hover:text-[#EB5424] duration-200 font-bold md:text-[.8vw] border-b divide-y border-dashed border-black ">
                  <Link onClick={() => setIsOpen(!isOpen)} to={link} smooth duration={500}>
                    {link}
                  </Link>
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
