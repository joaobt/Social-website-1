import React from "react";
import "./portfolio.css";
import IMG1 from "../../assents/portfolio1.jpg";
import IMG2 from "../../assents/portfolio2.jpg";
import IMG3 from "../../assents/portfolio3.jpg";
import IMG4 from "../../assents/portfolio4.jpg";
import IMG5 from "../../assents/portfolio5.png";
import IMG6 from "../../assents/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5>My React Work</h5>
      <h2>Portifolio</h2>

      <div className="container portifolio__container">
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portifolio item title</h3>
          <div className="portifolio__item-cta">
            <a href="http://github.com" className="btn" target="__blank">
              Github
            </a>
            <a
              href="http://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              targed="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portifolio item title</h3>
          <div className="portifolio__item-cta">
            <a href="http://github.com" className="btn" target="__blank">
              Github
            </a>
            <a
              href="http://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              targed="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portifolio item title</h3>
          <div className="portifolio__item-cta">
            <a href="http://github.com" className="btn" target="__blank">
              Github
            </a>
            <a
              href="http://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              targed="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portifolio item title</h3>
          <div className="portifolio__item-cta">
            <a href="http://github.com" className="btn" target="__blank">
              Github
            </a>
            <a
              href="http://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              targed="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portifolio item title</h3>
          <div className="portifolio__item-cta">
            <a href="http://github.com" className="btn" target="__blank">
              Github
            </a>
            <a
              href="http://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              targed="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portifolio item title</h3>
          <div className="portifolio__item-cta">
            <a href="http://github.com" className="btn" target="__blank">
              Github
            </a>
            <a
              href="http://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              targed="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
