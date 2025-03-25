// src/hooks/useNavigationLoading.js
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavigationLoading = (minLoadingTime = 5000) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => {
      setTimeout(() => setIsLoading(false), minLoadingTime);
    };

    handleStart();
    handleComplete();

    return () => {
      // Cleanup if component unmounts
      setIsLoading(false);
    };
  }, [location.key, minLoadingTime]); // React to route changes

  return isLoading;
};