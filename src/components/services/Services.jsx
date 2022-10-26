import React from "react";
import "./services.css";
import { BiCheck }from 'react-icons/bi'
const services = () => {
  return (

     <section id="Services">
      <h5>Wat I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
       <article className="service">
        <div className="service__head">
          <h3>UI/UX Desing</h3>
        </div>

        <ul className="service__list">
     
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
        </ul>
       </article>

       {/* 2 ======================== END OF UI/UX========================================*/}
       <article className="service">
        <div className="service__head">
          <h3>Web Develoment</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
        </ul>
       </article>

       {/* 3 ======================== web develoment========================================*/}
       <article className="service">
        <div className="service__head">
          <h3>Content Creaction</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
       
        </ul>
       </article>

       {/*======================== END OF CONTENT CREATION========================================*/}

      </div>

    </section>
  )
  
};

export default services;
