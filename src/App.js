import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/skills'; 
import Portfolio from './components/projects/Projects';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Router>
      <Sidebar />
      <div>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
