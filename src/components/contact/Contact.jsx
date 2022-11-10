
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useRef, } from "react";

 const Contact =() => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
     
        emailjs.sendForm(
            "service_33jp94m",
            "template_mr4kv6s",
            form.current,
            "user_SO4fmcQs-RyLpYi3Z"
        ); // erro
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
                        <h5>dummyegator@gmail.com</h5>
                        <a href="joao4729@gmail.com" target="__blank">
                            Send message
                        </a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messager</h4>
                        <h5>egatortutorials</h5>
                        <a href="http://m.me/ernest.achievier" target="__blank">
                            Send message
                        </a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatssApp</h4>
                        <h5>+123456789</h5>
                        <a href="https://api.WhatsApp.com/send?phone+55-319966567563" target="__blank">
                            Send message
                        </a>
                    </article>
                </div>
                {/*=================================END CONTACT OPTION============*/}
                <form ref={form} onSubmit={sendEmail}>
                    
                       <input type="text" name="name"  placeholder="Your Full Name" required />
                       <input type="email" name="email" placeholder="Your Email" required />
                       <textarea name="message"rows="7" placeholder="Your Message"required ></textarea>
                       <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
}
export default Contact

  


                    
                    
                        
                        
                        
                        
                  
                   
                        
                   
