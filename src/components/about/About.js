import React from 'react'
import './About.css';
import {Link} from "react-router-dom"

const About = () => {
  return (
    <section className="about">
      <div className="section-center clearfix">
        <article className="about-img">
            <h1>Welcome to Inter-Wood kraft Interior</h1>
        </article>
        <article className="about-info">  
          <p className="about-text">
          Interwood Interiors is a kenya company specialising in commercial interior design for a number of sectors, including hospitality, office, medical, retail, education and others..
          We are also a team of professional, driven and focused sourcing specialists, leveraging decades of industry experience and a exclusive partnerships to deliver outstanding results for our client’s cap-ex projects & budgets.
          Monday - Friday 8 AM - 5 PM
          Saturday - 8 AM - 1 PM
          </p>
          <p className="about-text">
           <b> "A company which is,reliable,convinence and portable (on the move)"
            Call,text,email,anytime Operating 24/7 </b>
          </p>
        </article>
        <Link to='/'>
        <button className="btn">Home</button>
        </Link>
      </div>
    </section>
  )
}

export default About