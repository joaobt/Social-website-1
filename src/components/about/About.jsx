import React from "react";
import "./about.css";
import ME from "../../assents/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>Aboutt Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ wordwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>80+ Compled</small>
            </article>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium accusamus, ipsa magnam quia rem quod amet doloremque
                illo nulla! Eligendi vero non obcaecati officiis reiciendis
                porro rem illum, consequatur illo.
              </p>

              <a href="#contact" className="btn btn-primay">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
