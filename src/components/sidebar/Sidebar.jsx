import React, { useState, useEffect } from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.svg";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const skillsSection = document.getElementById('skills');
      const portfolioSection = document.getElementById('portfolio');
      const contactSection = document.getElementById('contact');
      
      const offset = 100; // Adjust the offset as needed
      
      if (homeSection && aboutSection && skillsSection && portfolioSection && contactSection) {
        if (window.scrollY < aboutSection.offsetTop - offset) {
          setActiveLink('#home');
        } else if (window.scrollY < skillsSection.offsetTop - offset) {
          setActiveLink('#about');
        } else if (window.scrollY < portfolioSection.offsetTop - offset) {
          setActiveLink('#skills');
        } else if (window.scrollY < contactSection.offsetTop - offset) {
          setActiveLink('#portfolio');
        } else {
          setActiveLink('#contact');
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <aside className='aside'>
      <a href="#home" className='nav__logo'>
        <img src={Logo} alt="Logo" />
      </a>

      <nav className='nav'>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className={`nav__link ${activeLink === '#home' ? 'active' : ''}`}><i className="icon-home"></i></a>
            </li>
            <li className="nav__item">
              <a href="#about" className={`nav__link ${activeLink === '#about' ? 'active' : ''}`}><i className="icon-user-following"></i></a>
            </li>
            <li className="nav__item">
              <a href="#skills" className={`nav__link ${activeLink === '#skills' ? 'active' : ''}`}><i className="icon-briefcase"></i></a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className={`nav__link ${activeLink === '#portfolio' ? 'active' : ''}`}><i className="icon-layers"></i></a>
            </li>
            <li className="nav__item">
              <a href="#contact" className={`nav__link ${activeLink === '#contact' ? 'active' : ''}`}><i className="icon-bubble"></i></a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2024 - 2025</span>
      </div>
    </aside>
  );
}

export default Sidebar;
