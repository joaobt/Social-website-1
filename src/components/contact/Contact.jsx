
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import  { useRef } from 'react';
import emailjs from "emailjs-com";





 const Contact =() => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()
     
        emailjs.sendForm(
            "service_kz4qfkb",
            "service_kz4qfkb",
            form.current,
            "user_XAFCngR21pAvnH2rP"
        ) // erro
    };



    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>joao4729@gmail.com</h5>
                        <a href="mailto:joao4729@gmail.com" target="__blank">
                            Send a message
                        </a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messager</h4>
                        <h5>JB</h5>
                        <a href="http://m.me/ernest.achievier" target="__blank">
                            Send message
                        </a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatssApp</h4>
                        <h5>55+31996647563</h5>
                        <a href="https://api.WhatsApp.com/55+31996647563" target="__blank">
                            Send message
                        </a>
                    </article>
                </div>
                {/*=================================END CONTACT OPTION============*/}
                <form ref={form} onSubmit={sendEmail}>
                   
                       <input type="text" name="name"  placeholder="Your Full Name" required />
                       <input type="email" name="email" placeholder="Your Email" required />
                       <textarea name="message"rows="7" placeholder="Your Message"required></textarea>
                       <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
}
export default Contact
                    
                    
                     

  


                    
                    
                        
                        
                        
                        
                  
                   
                        
                   
