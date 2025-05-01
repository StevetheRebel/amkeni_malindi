import React, { useEffect, useRef } from "react";

function RainbowSpinner() {
  const spinnerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (spinnerRef.current) {
        spinnerRef.current.classList.add('fade-out')
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [])


  return (
    <div className="rainbow-spinner-container">
      <div className="rainbow">
        <div className="rainbow-inner"></div>
      </div>
    </div>
  );
}

export default RainbowSpinner;
