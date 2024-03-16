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
    <header>
      <section id='home'>
        <div className="logoName">
          <Image className="logo" src={logo} alt='logo' />
        </div>
      </section>
      <nav className='headerNav'>
        <ul>

          <li><a href="#home" ref={anchorRef} onClick={scrollToAbout}>Home</a></li>
          <li><a href="#about" ref={anchorRef} onClick={scrollToAbout}>About</a></li>
          <li><a href="#events" ref={anchorRef} onClick={scrollToAbout}>Events</a></li>
          <li><a href="#" ref={anchorRef} onClick={scrollToAbout}>Contact</a></li>
        </ul> 
      </nav>
    </header>
  )
}

export default Header
