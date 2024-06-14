import React from "react";
import Heading from "./Heading";

const About = ({ darkMode }) => {
  // bg-[#E04343]
  return (
    <div name="about" className="w-full h-screen">
      <div className="inner-about w-full h-full flex items-center py-[2vw] flex-col">
        <Heading
          title={
            <>
              A LITTLE <span className="text-red-500"> ABOUT </span> ME
            </>
          }
        />
        <div className="about-me-paragraph w-full flex md:flex-row flex-col items-center gap-12 justify-evenly py-12 px-4 leading-7 text-center wow animate__animated animate__lightSpeedInLeft">
          <div className="paragraph md:w-1/2 w-full">
            <p className="font-mono text-sm md:text-base ">
              Hello!  I am a self-taught programmer
              with a passion for learning and exploring new technologies. I have
              a strong background in FrontEnd Development and improving
              full-stack development and am always eager to expand my skillset
              and take on new challenges. In my free time, I enjoy sipping on a
              cup of tea (or coffee) and watching a game of cricket. As a
              dedicated and driven individual, I am constantly seeking out
              opportunities to grow and improve as a programmer.!
            </p>
          </div>

          <div className="video md:w-1/2 w-full md:h-[32vw] h-[65vw] ">
            {
              darkMode
                ?
                <video
                  loop
                  muted
                  autoPlay
                  className="w-full h-full object-cover object-center"
                  src="./coderLife.mp4"
                ></video>
                :
                <video
                  loop
                  muted
                  autoPlay
                  className="w-full h-full object-cover object-center"
                  src="./boy-coding-smile.mp4"
                ></video>


            }


          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
