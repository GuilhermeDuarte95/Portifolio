import React from "react";
import "./hero.css";
import content from "../../data/content";
import Perfil from "../../assets/Perfil.png"
import Button from "../button/button.js";

const Hero = () => {
  return (
    <section className="hero">
        <img src={Perfil} alt="Perfil" class="bottom-left-img"></img>
        <h3 className="initial">{content.heroSection.initial}</h3>
        <h1 className="title">{content.heroSection.title}</h1>
        <h2 className="subtitle">{content.heroSection.subtitle}</h2>
        <p className="text" dangerouslySetInnerHTML={{ __html: content.heroSection.text }}></p>
        <p className="catchphrase">{content.heroSection.catchphrase}</p>
        <div className="button-container">
          <Button 
            text={content.heroSection.buttonTextCv}
            onClick={() => window.location.href = "../../public/curriculo.pdf"} // Caminho para o PDF na pasta public
          />
          <Button 
            text={content.heroSection.buttonTextLinkedin}
            onClick={() => window.open("https://www.linkedin.com/in/guilherme-duarte-5ab2b9201/", "_blank")}
          />
          <Button 
            text={content.heroSection.buttonTextContato} variant="secondary"
            onClick={() => window.open("https://wa.me/5513997071968", "_blank")} 
          />
        </div>
    </section>
  );
};

export default Hero;
