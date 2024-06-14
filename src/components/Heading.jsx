import React from "react";
import { BsChevronDown } from "react-icons/bs";

const Heading = ({title ,index}) => {
  return (
    <>
      <div key={index} className="heading [word-spacing:6px] ">
        <h1 className="font-sans font-bold tracking-widest text-2xl md:text-[1.3vw] pt-6">
          {title}
        </h1>
      </div>
      <div className="heading-border flex gap-2 items-center justify-between text-gray-500">
        <span className="md:tracking-widest text-xl mb-4  ">..........</span>
        <BsChevronDown className="text-2xl  opacity-35" />
        <span className="md:tracking-widest mb-4 text-xl  ">..........</span>
      </div>
    </>
  );
};

export default Heading;
