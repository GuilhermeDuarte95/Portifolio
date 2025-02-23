import React from "react";
import content from "../../data/content";
import "./footer.css";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa"; 

const Footer = () => {
  return (
    <section id="footer" className="footer">
      <p className="textFooter">{content.footer.textRights}</p>
      <p className="textFooter">{content.footer.textDesigned}</p>
      <div className="socialNetwork">
        <a href='https://www.linkedin.com/in/guilherme-duarte-5ab2b9201/' target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40}/>
        </a>
        <a href='https://www.youtube.com/@gdxpert' target="_blank" rel="noopener noreferrer">
            <FaYoutube size={40}/>
        </a>
        <a href='https://github.com/GuilhermeDuarte95' target="_blank" rel="noopener noreferrer">
            <FaGithub size={40}/>
        </a>
      </div>
    </section>
  );
};

export default Footer;
