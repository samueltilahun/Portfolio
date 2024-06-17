import React, { useState } from 'react'
import "./projects.css"
import Menu from './Menu'

const Portfolio = () => {
  function swipeLeft(){
    return 1;
  }
  function swipeRight(){
    return 1;
  }

  const [items, setItems] = useState(Menu)
  return (
    <div className="container section work" id="portfolio">
      <h2 className="section__title">Projects Completed</h2>

      <div className="work__container grid">
        {items.map((elem) => {
          const {id, image, title, link} = elem;
            return (
              <div data-aos="fade-up" className="work__card" key={id}>
                <div className="work__thumbnail">
                  <img src={image} alt="" className='work__image'/>

                  <div className="work__mask"></div>
                </div>

                <div className="work__title">{title}</div>
                <a href={link} className="work__button" target='_blank'>
                  <i className="icon-link work__button-icon"></i>
                </a>
                {/* <div className="next-left" onClick={swipeLeft()}></div>
                <div className="next-right" onClick={swipeRight()}></div> */}
            </div>
            )
        })}
      </div>
    </div>
  )
}

export default Portfolio