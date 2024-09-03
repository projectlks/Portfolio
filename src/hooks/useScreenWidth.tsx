import { useState, useEffect } from 'react';

// Custom hook to get screen width
export const useScreenWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => setWidth(window.innerWidth);

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};
