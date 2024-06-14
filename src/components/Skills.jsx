import React, { useState, useEffect, useRef } from "react";
import ProgressBar from "./ProgressBar";
import SkillSection from "./SkillSection";
import Heading from "./Heading";

const targets = [95, 96, 92, 95, 93, 85, 85, 90];
const titles = [
  "HTML5",
  "CSS3",
  "Javascript",
  "ReactJS",
  "TailwindCSS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
];

const Skills = () => {
  const [progresses, setProgresses] = useState(targets.map(() => 0));
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setProgresses((prev) =>
        prev.map((progress, index) =>
          progress < targets[index] ? progress + 1 : progress
        )
      );
    }, 50);

    return () => clearInterval(interval);
  }, [isAnimating]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsAnimating(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      name="skills"
      ref={containerRef}
      className="mx-auto max-w-screen-xl"
    >
      <div className="heading w-full h-full flex items-center md:pt-0 pt-[10vw] flex-col">
        <Heading
          title={
            <>
              <span className="text-red-500">SKILLS</span> & EXPERTISE
            </>
          }
        />
      </div>
      <div className="font-mono mx-auto max-w-screen-xl md:grid md:grid-cols-4 grid-cols-1 px-6 py-12">
        {progresses.map((progress, index) => (
          <ProgressBar key={index} progress={progress} title={titles[index]} />
        ))}
      </div>
      <div className="skills font-mono mt-6">
        <SkillSection />
      </div>
    </div>
  );
};

export default Skills;
