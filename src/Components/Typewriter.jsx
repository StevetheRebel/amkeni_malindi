import { useEffect, useState } from "react";
import "animate.css";

const Typewriter = ({ text, delay = 30, onComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return (
    <span className="inline-block">
      {displayText.split("").map((char, index) => (
        <span
          key={index}
          className="animate__animated animate__fadeIn"
          style={{ animationDelay: `${index * (delay / 1000)}s` }}
        >
          {char}
        </span>
      ))}
      {currentIndex < text.length && (
        <span className="animate__animated animate__fadeIn animate__infinite inline-block w-2 h-6 bg-black ml-1 align-middle" />
      )}
    </span>
  );
};

export default Typewriter;
