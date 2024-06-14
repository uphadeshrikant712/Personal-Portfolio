import React, { useEffect, useState } from "react";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import { Link } from "react-scroll";

const Hero = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible((prevState) => !prevState); // Toggle visibility
    }, 2000); // Interval in milliseconds (e.g., 1000ms = 1 second)

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once on component mount

  return (
    <div
      name="home"
      className="w-full h-screen flex items-center justify-center"
    >
      <div className={`"inner-div  w-full flex flex-col gap-3 items-center justify-center h-full bg-center bg-cover  " ${darkMode ? "bg-[url('/bg.gif')]" : "bg-[url('/home-bg.jpg')]"} `}>
        <div className="heading pt-[25vw] md:pt-20 md:rotate-[-5deg]">
          <h1 className="font-kaushan capitalize text-[#EB5424] text-3xl md:text-4xl ">
            - shrikant uphade -
          </h1>
        </div>
        <div className="subtitles flex md:pt-4 wow animate__animated animate__lightSpeedInLeft animate__slow">
          <h1 className=" md:tracking-wide md:text-base text-sm font-mono capitalize">
            frontend developer |
            {isVisible ? (
              <span className="text-red-600"> Full Stack Developer </span>
            ) : (
              <span className="text-green-600"> A Professional Coder </span>
            )}
          </h1>
        </div>
        <div className="md:px-[20vw] paragraph px-4 md:pt-12 pt-3 text-center md:py-10 wow animate__animated animate__lightSpeedInRight animate__slow">
          <p className="font-raleway">
            As a <span className="bg-gradient-to-r from-pink-500 to-orange-600 px-2 py-1 rounded-full font-semibold text-black">Full-stack web developer</span> , I have a strong foundation in a range of technologies. My expertise spans from front-end development to back-end programming.One of my favourite technologies to work with is  React.js, particularly within the <span className=" bg-gradient-to-r from-pink-500 to-orange-600 px-2 py-1 rounded-full text-black">MERN</span> stack. <br /> Let us work together.
            Thank you.!
          </p>
        </div>

        <div className="bottom-arrow cursor-pointer">
          <Link to="about" duration={300} smooth>

            <TfiAngleDoubleDown className="text-4xl animate-bounce" />
          </Link>
        </div>
        

      </div>
    </div>
  );
};

export default Hero;
