import React, { useState, useEffect, useRef } from 'react';
import "./skills.css";
import html from "../../assets/html.jpg";
import css from "../../assets/css.jpg";
import javascript from "../../assets/javascript.png";
import react from "../../assets/reactjs.png";
import node from "../../assets/nodejs.png";
import mongodb from "../../assets/mongodb.png";
import wordpress from "../../assets/wordpress.jpg";
import restapi from "../../assets/restapi.jpeg";
import express from "../../assets/express.png";

const images = [html, css, javascript, react, node, express, mongodb, wordpress];

const Skills = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 500); // Duration should match the transition time
    }
  }, [index]);

  return (
    <div className="services section" id="skills">
      <div className="section__title__skills">Skills</div>
      <div className="container-slide"> 
        <div className="slider"
          ref={sliderRef}
          style={{
            transform: `translateX(-${index * (100 / 5)}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          }}
        >
          {[...images, ...images].map((image, idx) => (
            <div className="slide" key={idx}>
              <img src={image} alt="" className="slide-image" />
            </div>
          ))}
        </div>
      </div>
    </div> 
  );
};

export default Skills;
