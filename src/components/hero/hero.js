import React from "react";
import "./hero.css";
import content from "../../data/content";
import Perfil from "../../assets/Perfil.png"

const Hero = () => {
  return (
    <section className="hero">
        <img src={Perfil} alt="Perfil" class="bottom-left-img"></img>
        <h3 className="initial">{content.heroSection.initial}</h3>
        <h1 className="title">{content.heroSection.title}</h1>
        <h2 className="subtitle">{content.heroSection.subtitle}</h2>
        <p className="text" dangerouslySetInnerHTML={{ __html: content.heroSection.text }}></p>
        <p className="catchphrase">{content.heroSection.catchphrase}</p>
    </section>
  );
};

export default Hero;
