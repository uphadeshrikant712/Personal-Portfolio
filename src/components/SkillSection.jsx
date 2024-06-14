import React, { useState } from "react";
import "../ProgressBar.css"; // Import the CSS file for custom animations
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const SkillSection = () => {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });
  if (inView && !startCount) {
    setStartCount(true);
  }
  return (
    <div className="md:w-full w-[90%] wow animate__animated animate__slideInLeft py-12 px-4">
      <div className="skills-part grid grid-cols-1 md:grid-cols-2 gap-3  place-items-center ">

        <div ref={ref} className="progress-wrap-1 md:w-[40vw] w-full mt-4">
          <h3 className="flex justify-between items-center">
            <span>HTML5</span>
            <span>
              {startCount && <CountUp start={1} end={95} duration={4} />}%
            </span>
          </h3>
          <div className="uppper cursor-pointer h-[4px] md:w-[40vw] bg-gray-300 mt-2 rounded-full">
            <div className="innner h-full w-[95%] bg-[#2980b9] progress-bar  rounded-full"></div>
          </div>
        </div>

        <div className="progress-wrap-2 md:w-[40vw] w-full mt-4">
          <h3 className="flex justify-between items-center">
            <span>CSS3</span>
            <span>
              {startCount && <CountUp start={1} end={96} duration={4} />}%
            </span>
          </h3>
          <div className="uppper cursor-pointer h-[4px] md:w-[40vw] bg-gray-300 mt-2 rounded-full">
            <div className="innner h-full w-[96%] bg-[#C0392B] progress-bar  rounded-full"></div>
          </div>
        </div>

        <div ref={ref} className="progress-wrap-3 md:w-[40vw] w-full mt-4">
          <h3 className="flex justify-between items-center">
            <span>Javascript</span>
            <span>
              {startCount && <CountUp start={1} end={92} duration={4} />}%
            </span>
          </h3>
          <div className="uppper cursor-pointer h-[4px] md:w-[40vw] bg-gray-300 mt-2 rounded-full">
            <div className="innner h-full w-[92%] bg-[#D35400] progress-bar  rounded-full"></div>
          </div>
        </div>

        <div className="progress-wrap-4 md:w-[40vw] w-full mt-4">
          <h3 className="flex justify-between items-center">
            <span>ReactJS</span>
            <span>
              {startCount && <CountUp start={1} end={95} duration={4} />}%
            </span>
          </h3>
          <div className="uppper cursor-pointer h-[4px] md:w-[40vw] bg-gray-300 mt-2 rounded-full">
            <div className="innner h-full w-[95%] bg-[#8E44AD] progress-bar  rounded-full"></div>
          </div>
        </div>

        <div ref={ref} className="progress-wrap-5 md:w-[40vw] w-full mt-4">
          <h3 className="flex justify-between items-center">
            <span>TailwindCSS</span>
            <span>
              {startCount && <CountUp start={1} end={95} duration={4} />}%
            </span>
          </h3>
          <div className="uppper cursor-pointer h-[4px] md:w-[40vw] bg-gray-300 mt-2 rounded-full">
            <div className="innner h-full w-[95%] bg-[#27AE60] progress-bar  rounded-full"></div>
          </div>
        </div>

        <div className="progress-wrap-6 md:w-[40vw] w-full mt-4">
          <h3 className="flex justify-between items-center">
            <span>NodeJS</span>
            <span>
              {startCount && <CountUp start={1} end={93} duration={4} />}%
            </span>
          </h3>
          <div className="uppper cursor-pointer h-[4px] md:w-[40vw] bg-gray-300 mt-2 rounded-full">
            <div className="innner h-full w-[93%] bg-[#2F3C4F] progress-bar  rounded-full"></div>
          </div>
        </div>

        <div ref={ref} className="progress-wrap-7 md:w-[40vw] w-full mt-4">
          <h3 className="flex justify-between items-center">
            <span>ExpressJS</span>
            <span>
              {startCount && <CountUp start={1} end={95} duration={4} />}%
            </span>
          </h3>
          <div className="uppper cursor-pointer h-[4px] md:w-[40vw] bg-gray-300 mt-2 rounded-full">
            <div className="innner h-full w-[95%] bg-[#2980b9] progress-bar  rounded-full"></div>
          </div>
        </div>

        <div className="progress-wrap-8 md:w-[40vw] w-full mt-4">
          <h3 className="flex justify-between items-center">
            <span>MongoDB</span>
            <span>
              {startCount && <CountUp start={1} end={93} duration={4} />}%
            </span>
          </h3>
          <div className="uppper cursor-pointer h-[4px] md:w-[40vw] bg-gray-300 mt-2 rounded-full">
            <div className="innner h-full w-[93%] bg-red-600 progress-bar  rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
