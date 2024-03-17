import { useState, useEffect } from 'react';

const useStickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30); // Update state on scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  return isSticky;
}

export default useStickyHeader;
