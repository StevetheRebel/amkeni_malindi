import React, { useEffect, useRef } from "react";

const RainbowSlider = () => {
  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    // Force animation start by briefly toggling opacity
    if (containerRef.current) {
      const children = containerRef.current.children;
      for (let i = 0; i < children.length; i++) {
        children[i].style.animationPlayState = "running";
      }
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute rounded-full h-[56px] w-full -z-10 overflow-hidden md:h-[65px] lg:h-[76px] xl:h-[88px] 2xl:h-[113px]"
    >
      {colors.map((color, index) => (
        <div
          key={index}
          className={`absolute top-0 rounded-full left-0 h-full w-full ${color} animate-rainbowSlide`}
          style={{
            animationDelay: `${index * 0.2}s`,
            zIndex: 10 - index,
            animationFillMode: "forwards",
            animationPlayState: "paused", // Start paused, will be triggered by useEffect
          }}
        />
      ))}
    </div>
  );
};

export default RainbowSlider;
