import React, { useState, useEffect } from 'react';
import "./home.css";
import Me from "../../assets/profile.jpg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  const fullText = "HI, I'm Samuel Tilahun. A passionate Full-Stack Web Developer.";
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Adjust the speed here

      return () => clearTimeout(timeout); // Cleanup the timeout on unmount
    }
  }, [currentIndex, fullText.length]);

  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Full-Stack Web Developer 🖐</h1>
        <span className="home__education typewriter">{displayedText}</span>

        <HeaderSocials />
        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
