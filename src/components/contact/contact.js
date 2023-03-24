import { useRef} from 'react';

import './contact.css';
import email from "../images/email-logo-black.png";

import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
  
    const handleSubmit = (e) => {
      e.preventDefault();
     
      emailjs.sendForm('service_usaquj4', 'template_mvel067', form.current, 'qoxPRSlPtsU8XJrUw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
    }

  return (
      <section id="section-contact" className="section-contact">
        <div className="contact">
          <div className="contact-title"><h1>Contact</h1></div>
            <form method="POST" ref={form} onSubmit={handleSubmit} className="section-contact-form">
              <div className="section-contact-grid">
                <input type="text" placeholder="Your name" name="name" required/>
                <input type="email" placeholder="Your Email" name="email" required/>
                <input type="text" placeholder="Subject" name="subject" required/>
                <textarea placeholder="Message" name="message" required/>
              </div>
              <div className="section-contact-info">
                <div>
                  <img src={email} alt="Email"/>
                  <span> Email</span>
                </div>
                <p>ivandiasworkrelated@proton.me</p>
                <button type="submit" className="section-contact-button">
                <p class="section-contact-button-text">Send</p>
                </button>  
              </div>
            </form>
        </div>
      </section>
  );
}

export default Contact;
