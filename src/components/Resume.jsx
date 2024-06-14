import React, { useEffect, useState } from "react";
import { LiaAngleDoubleRightSolid } from "react-icons/lia";

const Resume = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div
      name="resume"
      className="w-full md:h-[130vh] h-screen"
    >
      <div className="font-sans tracking-tighter w-full h-full md:leading-none flex items-center justify-center flex-col">
        <h1 className="md:text-[12vw] text-[18vw] uppercase font-bold wow animate__animated animate__fadeInLeft">Ready</h1>
        <h1 className="md:text-[12vw] text-[14vw] uppercase font-bold wow animate__animated animate__fadeInRight animate__delay-1s	1s">to unleash</h1>
        <h1 className="text-[12vw]  uppercase font-bold wow animate__animated animate__fadeInLeft animate__delay-1s 1s">my potential ?</h1>

        <div
          data-scroll
          data-scroll-section
          data-scroll-speed=".2"
          className=" absolute  mb-[15vw] flex items-center justify-center gap-3 md:w-1/3 h-[60vh] "
        >
          <div className=" maincircle1 md:w-[13vw] w-[30vw] h-[30vw] md:h-[13vw] rounded-full bg-gradient-to-r from-rose-600   to-orange-500 flex items-center justify-center ">
            <div className="innercircle1 relative flex items-center  justify-center md:w-[8vw] md:h-[8vw] w-[20vw] h-[20vw] rounded-full bg-gradient-to-r from-blue-500 to-slate-900 ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line1 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-[3vw] "
              >
                <div className=" inner-innercircle1 md:w-[1vw] md:h-[1vw] w-[4vw] h-[4vw] rounded-full bg-gradient-to-r from-black to-white "></div>
              </div>
            </div>
          </div>

          <div className="maincircle2 md:w-[13vw] md:h-[13vw] w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-rose-600   to-orange-500 flex items-center justify-center ">
            <div className="innercircle2 group relative w-[20vw] h-[20vw] md:w-[8vw] md:h-[8vw] bg-gradient-to-r from-blue-500 to-slate-900 rounded-full ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line2 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full flex items-center h-6"
              >
                <div className="md:h-[1vw] md:w-[1vw] w-[4vw] h-[4vw] bg-gradient-to-r from-black to-white rounded-full "></div>
              </div>
            </div>
          </div>
        </div>

        <div className="resume flex items-center justify-center pt-12 wow animate__animated animate__fadeInRight animate__delay-2s">
          <a href="https://drive.google.com/file/d/1PviyCoKOc0H5IUt0lystRsTnAAcMzqI2/view?usp=drivesdk" target="_blank" rel="norefferer noopener" className="md:px-7  md:py-2 px-8 py-2 md:text-[2vw] font-mono font-light  bg-gradient-to-r from-pink-600  to-orange-600 rounded-full flex items-center justify-center gap-3 group">
            Resume <span className="group-hover:rotate-90 animate-pulse transform transition-all duration-300 text-white font-light md:text-[2vw]">
              <LiaAngleDoubleRightSolid />
            </span>
          </a>
        </div>
      </div>

    </div>
  );
}



export default Resume