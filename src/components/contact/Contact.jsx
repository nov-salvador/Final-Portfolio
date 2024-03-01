import { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  function submitForm(e){
    e.preventDefault();
    try{
      emailjs.sendForm(
        "service_ola7sy8", 
        "template_hualfq4", 
        form.current, 
        {publicKey: "GU6FQ50WSsWTqbe7n"}
      )
    }catch(err){
      console.log(err.message)
    }
    e.target.reset();
  }
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <span className="section-subtitle">Say Hello</span>
      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Get in touch</h3>
          <div className="contact-info">
            <div className="contact-card">
              <i className="bx bx-mail-send contact-card-icon"></i>
              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">nov.salvador@gmail.com</span>
              <a href="mailto:nov.salvador@gmail.com" className="contact-button">
                Write me {" "}
                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
              </a>
            </div>
            <div className="contact-card">
              <i className="bx bxl-messenger contact-card-icon"></i>
              <h3 className="contact-card-title">Messenger</h3>
              <span className="contact-card-data">fb.com/larsley.salvador</span>
              <a href="https://m.me/larsley.salvador" target='_blank' className="contact-button">
                Write me {" "}
                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-content">
          <h3 className="contact-title">Send a message</h3>
          <form className="contact-form" ref={form} onSubmit={submitForm}>
            <div className="contact-form-div">
              <label className="contact-form-tag">Name</label>
              <input 
                type="text" 
                name="name"
                className="contact-form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact-form-div">
              <label className="contact-form-tag">Email</label>
              <input 
                type="email" 
                name="email"
                className="contact-form-input"
                placeholder="Insert your email"
              />
            </div>
            <div className="contact-form-div contact-form-area">
              <label className="contact-form-tag">Message</label>
              <textarea 
                name="message" 
                cols="30" 
                rows="10"
                className="contact-form-input"
                placeholder="Feel free to write a message"
              />
            </div>
            <button type="submit"className="button button-flex">
              Send Message
              <i className="uil uil-comment-chart-line button-icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact