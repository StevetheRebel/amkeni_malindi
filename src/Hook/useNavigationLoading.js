// src/hooks/useNavigationLoading.js
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useNavigationLoading = (minLoadingTime = 2000) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVibisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => {
      setIsVibisible(true);
      setIsLoading(true);
    };
    const handleComplete = () => {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsVibisible(false);
        }, 500);
      }, minLoadingTime);
    };

    handleStart();
    handleComplete();

    return () => {
      // Cleanup if component unmounts
      setIsLoading(false);
      setIsVibisible(false);
    };
  }, [location.key, minLoadingTime]); // React to route changes

  return { isLoading, isVisible };
};
