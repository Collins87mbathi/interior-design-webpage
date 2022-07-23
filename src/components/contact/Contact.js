import React from 'react'
import './Contact.css'

const Contact = () => {

  return (
    <section className="contact">
    <div className="section-center clearfix">
      
      <article className="contact-info">
       
        <div className="contact-item">
          
          <h3 className="contact-title">
            <span className="contact-icon">
              <i className="fas fa-location-arrow"></i> </span
            >address
          </h3>
          <h3 className="contact-text">
            Nairobi
          </h3>
        </div>
        
        <div className="contact-item">
        
          <h3 className="contact-title">
            <span className="contact-icon"> <i class="fas fa-envelope"></i> </span
            >email
          </h3>
          <h3 className="contact-text">
            email@email.com
          </h3>
        </div>
       
        <div className="contact-item">
          <h3 className="contact-title">
            <span className="contact-icon">
              <i className="fas fa-location-arrow"></i> </span
            >telephone
          </h3>
          <h3 className="contact-text">
          0707072393 , 0796088827
          </h3>
        </div>
      </article>
      <article className="contact-form">
        <form
          action="https://formspree.io/learncodetutorial@gmail.com"
          method="POST"
          className="form-group"
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            className="form-control"
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="form-control"
          />
          <textarea
            name="message"
            placeholder="message"
            className="form-control"
            rows="5"
          ></textarea>
          <button className="main-btn">send</button>
        </form>
      </article>
      </div>
    </section>
  )
}

export default Contact