import React from "react";

const ProgressBar = ({ progress, title }) => {
  return (
    <div className=" mx-auto max-w-screen-xl w-[45vw] h-[45vw] md:w-[13vw] md:h-[13vw] wow animate__animated animate__slideInRight relative cursor-pointer">
      <svg className="absolute" viewBox="0 0 100 100">
        <circle
          className="text-gray-200 stroke-current"
          cx="50"
          cy="50"
          r="45"
          strokeWidth="2"
          fill="none"
        />
        <circle
          className="text-orange-500 stroke-current"
          cx="50"
          cy="50"
          r="45"
          strokeWidth="2"
          fill="none"
          style={{
            strokeDasharray: 283,
            strokeDashoffset: 283 - (283 * progress) / 100,
            transition: "stroke-dashoffset 0.5s",
          }}
        />
      </svg>

      <div className="main cursor-pointer flex items-center justify-center absolute inset-0 flex-col">
        <span className="cursor-pointer capitalize ">{title}</span>
        <span>{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
