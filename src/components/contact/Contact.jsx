import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className="contact container section" id='contact'>
      <div className="section__title">Contact Me</div>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything</h3>
          <p className="contact__mail">Don't like forms? Send me an email</p>
        </div>
        <form action="" className='contact__form'>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Your name'></input>
            </div>
            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='insert your email'/>
            </div>
          </div>
          <div className="contact__form-div">
            <input type="text" className="contact__form-input" placeholder='insert your subject'/>
          </div>
          <div className="contact__form-div contact__form-textarea">
            <textarea cols="30" rows="10" className="contact__form-input" placeholder='insert your message' ></textarea>
          </div>
          <button className='btn'>Send Message</button>
        </form>
      </div>

    </div>
  )
}

export default Contact