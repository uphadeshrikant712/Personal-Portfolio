import React, { useState, useEffect } from "react";
const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e) => {
      requestAnimationFrame(() => updatePosition(e));
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="hidden md:block fixed w-3 h-3 animate-spin bg-gradient-to-r from-cyan-500 to-orange-500 rounded-full "
      style={{ left: position.x, top: position.y }}
    >
      
    </div>
  );
};

export default MouseFollower;
