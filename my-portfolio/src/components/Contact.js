import React, {useRef} from 'react';
import './ContactMe.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function ContactMe() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      ).then(
      (result) => {
        alert('Message sent successfully!');
        console.log(result.text);
      },
      (error) => {
        alert('Failed to send message, please try again!');
        console.log(error.text);
      }
    );
  };

    return (
        <div className="contact-container">
          <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    
          <div className="contact-info">
            <p>Email: <a href="mailto:anjalivaghjiani29@gmail.com">anjalivaghjiani29@gmail</a></p>
          </div>
    
          {/* Follow Me Section */}
          <div className="follow-me">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a href="https://github.com/AnjaliVaghjiani" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/anjalivaghjiani" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:anjalivaghjiani29@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      );
}

export default ContactMe;
