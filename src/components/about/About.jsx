import { React } from 'react'
import "./about.css"
import { useRef } from 'react'
import aboutme from "../../assets/aboutme.jpg"
import aboutme2 from "../../assets/aboutme2.png"

const About = () => {

  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const xRotation = ((clientY / innerHeight) - 0.5) * 50; // Adjust for tilt effect
    const yRotation = ((clientX / innerWidth) - 0.5) * 50; // Adjust for tilt effect

    if (imageRef1.current) {
      imageRef1.current.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    }

    if (imageRef2.current) {
      imageRef2.current.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    }
  };

  const handleMouseLeave = () => {
    if (imageRef1.current) {
      imageRef1.current.style.transform = 'rotateX(0) rotateY(0)';
    }

    if (imageRef2.current) {
      imageRef2.current.style.transform = 'rotateX(0) rotateY(0)';
    }
  };
  return (
    <section className="about container section" id='about'>
      <div className="section__title">About Me</div>
      <div className="about__container grid">
        <div className="aboutme__images" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img src={aboutme} alt="about__image" className='about__image' ref={imageRef1}/>
          <img src={aboutme2} alt="about__image2" className='about__image2' ref={imageRef2}/>
        </div>

        <div className="about__data grid">
            <p className="about__description">
            Hello! I'm a passionate web developer with a focus on both frontend and backend technologies. I specialize in HTML, CSS, JavaScript, React, Node.js, and MongoDB. My goal is to create beautiful, functional websites and applications that provide seamless user experiences. I'm dedicated to continuous learning and eager to contribute my skills to a dynamic team. Let's build something great together!</p>

            <div className="about__contact__info">
              <div className="about__contact">
                <label htmlFor="name">NAME</label>
                <p>Samuel Tilahun</p>
                <label htmlFor="name">EDUCATION</label>
                <p>Addis Ababa University - Computer Science Degree</p>
              </div>
              <div className="about__contact2">
                <label htmlFor="name">EMAIL</label>
                <p>samueltilahun0991@gmail.com</p>
                <label htmlFor="name">EMPLOYMENT</label>
                <p>Open</p>
              </div>
            
          </div>
          {/* <a href="#" className="btn">Download CV</a> */}
        </div>
      </div>
    </section>
  )
}

export default About