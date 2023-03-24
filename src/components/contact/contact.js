import { useRef, useState } from 'react';

import './contact.css';
import email from "../images/email-logo-black.png";

import emailjs from "@emailjs/browser";

const ResultSuccess = () => (
  <div id="result" className="result-success-text">
        <p>Thank you for the message!</p>
  </div>
)

//const ResultError = () => (
  //<div id="result" className="result-error-text">
    //    <p>Error!</p>
  //</div>
//)

const Contact = () => {
    const form = useRef();

    const [showResults, setShowResults] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
     
      emailjs.sendForm('service_usaquj4', 'template_mvel067', form.current, 'qoxPRSlPtsU8XJrUw')
      .then((result) => {
          //console.log(result.text);
          setShowResults(true)
      }, (error) => {
          //console.log(error.text);
          setShowResults(false)
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
                  <span>Email</span>
                </div>
                <p>ivandiasworkrelated@proton.me</p>
                { showResults ? <ResultSuccess /> : null }
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
