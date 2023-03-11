import React from 'react'
import "./ContactMe.css"
import imgBack from "../../assets/contactMe/mail.jpg"
// import load1 from "../../assets/contactMe/load-loading.gif"
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Typical from "react-typical"
import { useState,useRef } from 'react'
import emailjs from '@emailjs/browser';



function ContactMe() {
    
    const formRef = useRef();
    const [done, setDone] = useState(false)
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_ivqjyld",
          "template_pv51dcg",
          formRef.current,
          "uZBmLQSCERLh9fn3c"
        )
        .then(
          (result) => {
            console.log(result.text); 
            setDone(true)
          },
          (error) => {
  
        console.log(error.text);

          }
        );

       
    };
    
  return (
    <div className='main-container' id='contactMe' name="ContactMe">
    <ScreenHeading
        subHeading={"Lets Keep In Touch"}
        title={"Contact Me"}
    />

    <div className="central-form">
        <div className="col">
            <h2 className='title'>
                <Typical
                    loop={Infinity}
                    steps={[
                        "Get In Touch 🖥",
                        1000,

                    ]}
                />
            </h2>

            <a href="/#">
                <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="/#">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="/#">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="/#">
                <i className="fa-brands fa-square-twitter"></i>
            </a>
            <a href="/#">
                <i class="fa-brands fa-square-github"></i>
            </a>
        </div>

        <div className="back-form">
            <div className="img-back">
                <h4>Send Your Email Here!</h4>
                <img src={imgBack} alt="not Found" />
            </div>

            <form ref={formRef} onSubmit={handleSubmit}>


                <label htmlFor="name">Name</label>
                <input  type="text" placeholder="Name" name="user_name" />

                <label htmlFor="email">Email</label>
                <input  type="text" placeholder="Email" name="user_email" />

                <label htmlFor="message">Message</label>
                <textarea rows="5" placeholder="Message" name="message" />

                <div className="send-btn">
                    <button type='submit'>
                        Send
                        <i className='fa fa-paper-plane' />
                        
                    </button>
                   <span className='end'>{done && "Thank You..."}</span> 
                </div>
            </form>
        </div>
    </div>
</div>

)
  
}

export default ContactMe