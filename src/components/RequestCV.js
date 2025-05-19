import React, { useRef, useState } from 'react';
import '../css/RequestCV.css';
import emailjs from '@emailjs/browser';

function RequestCVForm({ onClose }) {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
        }, 3000); // Close the form after 3 seconds
      },
      (error) => {
        alert('Failed to send request, please try again!');
        console.log(error.text);
        setIsSubmitting(false);
      }
    );
  };

  return (
    <div className="request-cv-overlay">
      <div className="request-cv-modal">
        <button className="close-button" onClick={onClose}>×</button>
        
        {isSubmitted ? (
          <div className="success-message">
            <h3>Thank you!</h3>
            <p>Your CV request has been received. I'll send it to your email shortly.</p>
          </div>
        ) : (
          <>
            <h2>Request CV</h2>
            <p>Please fill out this form to request my CV. I'll send it to your email as soon as possible.</p>
            
            <form ref={form} onSubmit={sendEmail} className="request-form">
              <input 
                type="text" 
                name="user_name" 
                placeholder="Your Name" 
                required 
              />
              
              <input 
                type="email" 
                name="user_email" 
                placeholder="Your Email" 
                required 
              />
              
              <textarea 
                name="message" 
                placeholder="Message (Optional)" 
                rows="3"
              ></textarea>
              
              {/* Hidden field to indicate this is a CV request */}
              <input type="hidden" name="request_type" value="CV Request" />
              
              <button 
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Request CV'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default RequestCVForm;