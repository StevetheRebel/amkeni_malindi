import React from "react";

function RainbowSpinner() {
  return (
    <div className="fixed flex items-center justify-center w-full h-screen bg-primary z-[100]">
      <div className="rainbow">
        <div className="rainbow-inner"></div>
      </div>
    </div>
  );
}

export default RainbowSpinner;
