import React from "react";
import "./about.css";
import content from "../../data/content";

const About = () => {
  return (
    <section id="about" className="about">
        <h1 className="title">{content.aboutSection.title}</h1>
        <p className="description">{content.aboutSection.description}</p>
    </section>
  );
};

export default About;
