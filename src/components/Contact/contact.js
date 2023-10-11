import React, { useRef } from "react";
import './contact.css';
import emailjs from '@emailjs/browser';
import Walmart from '../../assets/walmart.png';
import FacebookIcon from '../../assets/facebook-icon.png';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_ik9jnpt", "template_ys2olcn", form.current, 'tWX3oK3M3XO7D8CeH')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email Send");
          }, (error) => {
              console.log(error.text);
              alert("Email Not Send");
          });
    };
  return (
    <section className="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My clients</h1>
            <p className="clientDesc">
                I have had the opportunity to work wit dsfsdg fsgdfdghh
            </p>
            <p className="clientImgs">
                <img src={Walmart} alt="Client" className="clientImg"/>
                <img src={Walmart} alt="Client" className="clientImg"/>
                <img src={Walmart} alt="Client" className="clientImg"/>
                <img src={Walmart} alt="Client" className="clientImg"/>
            </p>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out form below to dicuss</span>
            <form ref={form} className="contactForm" onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="your name" name='from_name' required/>
                <input type="email" className="email" placeholder="your email" name='from_email' required/>
                <textarea className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
                <button type="submit" value="Send" className="submitBtn" >Submit</button> 
                <div className="links">
                    <img src={FacebookIcon} alt="FacebookIcon" className="link" />
                    <img src={FacebookIcon} alt="FacebookIcon" className="link" />
                    <img src={FacebookIcon} alt="FacebookIcon" className="link" />
                    <img src={FacebookIcon} alt="FacebookIcon" className="link" />
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact;