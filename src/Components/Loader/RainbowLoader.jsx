import React, { useRef } from "react";
import "animate.css/animate.min.css";

function RainbowLoader() {

  return (
    <div className="rainbow-container gap-4 bg-primary animate__animated animate__slideOutDown animate_fast animate__delay-3s ">
      <div className="w-4 h-4 bg-red-500 rounded-full rainbow-bounce delay-0"></div>
      <div className="w-4 h-4 bg-orange-500 rounded-full rainbow-bounce delay-1"></div>
      <div className="w-4 h-4 bg-yellow-500 rounded-full rainbow-bounce delay-2"></div>
      <div className="w-4 h-4 bg-green-500 rounded-full rainbow-bounce delay-3"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full rainbow-bounce delay-4"></div>
      <div className="w-4 h-4 bg-indigo-500 rounded-full rainbow-bounce delay-5"></div>
      <div className="w-4 h-4 bg-violet-500 rounded-full rainbow-bounce delay-6"></div>
    </div>
  );
}

export default RainbowLoader;
