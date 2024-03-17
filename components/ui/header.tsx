"use client"
import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import logo from '../../public/images/aulogo.png';
import Image from 'next/image';


const Header = () => {
  const [showContent, setShowContent] = useState(false);
  const scrollRef = useRef<HTMLElement | null>(null);
  const anchorRef = scrollRef as React.RefObject<HTMLAnchorElement>;
  const scrollToAbout = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
     scrollToAbout();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setShowContent(width >= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <header className="absolute w-full z-30">
     
    </header>
  )
}

export default Header
