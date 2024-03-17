"use client"

import React, { useEffect, useRef, useState } from 'react';
import './Header.css'; // Add your CSS for styling
import logo from '../../public/images/aulogo.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useStickyHeader from './nav';

const Header = () => {
  const isSticky = useStickyHeader();
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const scrollRef = useRef<HTMLElement | null>(null);
  const anchorRef = scrollRef as React.RefObject<HTMLAnchorElement>;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowContent(!showContent)
  };

  const menuClasses = `header__menu ${isOpen ? 'active' : ''}`;

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
    <header className={`header ${isSticky ? 'fixed bg-gray-900 justify-between items-center p-4 h-15 w-full' : ''}`}>
      <section id='home' className=''>
        <div className="logoName">
          <Image className="logo" src={logo} alt='logo' />
        </div>
      </section>
      {showContent ? (
        <nav className={menuClasses}>
          <ul>
            <li><a href="#home" ref={anchorRef} onClick={scrollToAbout}>Home</a></li>
            <li><a href="#about" ref={anchorRef} onClick={scrollToAbout}>About</a></li>
            <li><a href="#events" ref={anchorRef} onClick={scrollToAbout}>Events</a></li>
            <li><a href="#contact" ref={anchorRef} onClick={scrollToAbout}>Contact</a></li>
          </ul>
        </nav>
      ) : (
        <button className="header__menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      )}
    </header>
  );
};

export default Header;


















// import React, { useEffect, useRef, useState } from 'react';
// import './Header.css';
// import logo from '../../public/images/aulogo.png';
// import Image from 'next/image';


// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//   const menuClasses = `header__menu ${isOpen ? 'active' : ''}`;
//   const [showContent, setShowContent] = useState(false);
//   const scrollRef = useRef<HTMLElement | null>(null);
//   const anchorRef = scrollRef as React.RefObject<HTMLAnchorElement>;
//   const scrollToAbout = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//      scrollToAbout();
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setShowContent(width >= 768);
//     };
//     window.addEventListener('resize', handleResize);
//     handleResize();
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
  
//   return (
//     <header>
//       <section id='home' className='' >
//         <div className="logoName">
//           <Image className="logo" src={logo} alt='logo' />
//         </div>
//       </section>
//       <nav className='headerNav'>
//         <ul>

//           <li><a href="#home" ref={anchorRef} onClick={scrollToAbout}>Home</a></li>
//           <li><a href="#about" ref={anchorRef} onClick={scrollToAbout}>About</a></li>
//           <li><a href="#events" ref={anchorRef} onClick={scrollToAbout}>Events</a></li>
//           <li><a href="#contact" ref={anchorRef} onClick={scrollToAbout}>Contact</a></li>
//         </ul> 
//       </nav>
//     </header>
//   )
// }

// export default Header
