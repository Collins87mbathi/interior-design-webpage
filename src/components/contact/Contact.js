import axios from 'axios';
import React,{useState} from 'react'
import {BaseUrl} from "../../components/links/constant"
import './Contact.css'


const Contact = () => {
  const [loading,setloading] = useState(false)
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');


  const handleSubmit = async (e) => {
    setloading(true);
    e.preventDefault();
    try {
      const res = await axios.post(BaseUrl + '/sendmail', {
        name,
        email,
        message 
        });
        setloading(false);
        alert(res.data);
    } catch (error) {
      alert(error);
    }
   
  }



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
            <span className="contact-icon"> <i className="fas fa-envelope"></i> </span
            >email
          </h3>
          <h3 className="contact-text">
           interwoodcraftsuperinteriors@gmail.com
          </h3>
        </div>
       
        <div className="contact-item">
          <h3 className="contact-title">
            <span className="contact-icon">
              <i className="fas fa-location-arrow"></i> </span
            >telephone
          </h3>
          <h3 className="contact-text">
          0707072393
          </h3>
        </div>
      </article>
      <article className="contact-form">
        <form onSubmit={handleSubmit}
          className="form-group"
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            className="form-control"
            onChange={(e)=>setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="form-control"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="message"
            className="form-control"
            onChange={(e)=>setMessage(e.target.value)}
            rows="5"
          ></textarea>
          <button className="main-btn">{loading ? "sending..." : "send"}</button>
        </form>
      </article>
      </div>
    </section>
  )
}

export default Contact