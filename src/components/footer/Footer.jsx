import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
            {/* <div className="footer-content"> */}
                
                <div className="footer-contact">
                    <p>Contact Me:</p>
                    <p>samueltilahun0991@gmail.com</p>
                </div>
                <div className="footer-social">
                    <a href="https://github.com/samueltilahun" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/samuel-tilahun-a637ba22b/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="mailto:samueltilahun0991@gmail.com"><FaEnvelope /></a>
                </div>
            {/* </div> */}
            <div className="footer-copyright">
                <p>&copy; 2024 Samuel Tilahun. All Rights Reserved.</p>
            </div>
        </footer>
  )
}

export default Footer