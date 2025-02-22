import React from "react";
import content from "../../data/content";
import "./contact.css";
import Button from "../button/button.js";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h1 className="titleContact">{content.contactSection.title}</h1>
      <p className="textContact">{content.contactSection.description}</p>
        <Button 
            text={content.contactSection.buttonTextContato} variant="secondary"
            onClick={() => window.open("https://wa.me/5513997071968", "_blank")} 
        />
    </section>
  );
};

export default Contact;
