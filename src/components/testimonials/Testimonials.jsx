
import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assents/avatar1.jpg";
import AVTR2 from "../../assents/avatar2.jpg";
import AVTR3 from "../../assents/avatar3.jpg";
import AVTR4 from "../../assents/avatar4.jpg";


const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum",
  },

  {
    avatar: AVTR2,
    name: "Marcio ",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum",
  },

  {
    avatar: AVTR3,
    name: "Nana Ama ",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum",
  },

  {
    avatar: AVTR4,
    name: "john ",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum",
  },
];

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt=''/>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default testimonials;
