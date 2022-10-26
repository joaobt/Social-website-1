/* eslint-disable no-undef */
import React from "react";
import "./portfolio.css";
import IMG1 from "../../assents/portfolio1.jpg";
import IMG2 from "../../assents/portfolio2.jpg";
import IMG3 from "../../assents/portfolio3.jpg";
import IMG4 from "../../assents/portfolio4.jpg";
import IMG5 from "../../assents/portfolio5.png";
import IMG6 from "../../assents/portfolio6.jpg";


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dasboard & Financial Visualization',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization',
  },

{
    id: 2,
    image: IMG2,
    title: 'Crypto Currency Dasboard & Financial Visualization',
    github: 'http://github.com',
    demo: "https://dribbble.com/shots/19551584-Orion-UI-kit-for-Figma"
  },
  
  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency Dasboard & Financial Visualization',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/19609442-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  
  {
    id: 4,
    image: IMG4,
    title: 'Crypto Currency Dasboard & Financial Visualization',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/19609416-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency Dasboard & Financial Visualization',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/19660633-Sankey-Chart-Orion-UI-Kit',
  },
  
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dasboard & Financial Visualization',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/19300881-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },

 ]

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5>My React Work</h5>
      <h2>Portifolio</h2>




      <div className="container portifolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article Key={id} className="portifolio__item">
              <div className="portifolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portifolio__item-cta">
                <a href={github} className="btn" target="__blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  targed="__blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
