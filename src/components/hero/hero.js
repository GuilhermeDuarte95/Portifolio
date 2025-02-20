import React from "react";
import "./hero.css";
import content from "../../data/content";

const Hero = () => {
  return (
    <section className="hero">
      <h3>{content.heroSection.initial}</h3>
      <h1>{content.heroSection.title}</h1>
      <h2>{content.heroSection.subtitle}</h2>
      <p>{content.heroSection.text}</p>
      <p>{content.heroSection.catchphrase}</p>
    </section>
  );
};

export default Hero;
