import React from 'react'

const ScrollDown = () => {
  return (
    <div className="scroll__down">
        <a href="#about" className="mouse__wrapper">
            <span className="home__scroll-down">Scroll Down</span>
            <div className="mouse">
                <span className="wheel"></span>
            </div>
        </a>
    </div>
  )
}

export default ScrollDown