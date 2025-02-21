import React from "react";
import "./skillsSection.css";
import content from "../../data/content";

const SkillsSection = () => {
  return (
    <section id="skills" className="skills">
        <h1 className="title">{content.skillsSection.title}</h1>
        <div className="skills-container">
            {content.skillsSection.skills.map((skill, index) => (
                <p key={index} className="skill-item">{skill}</p>
            ))}
        </div>
    </section>
  );
};

export default SkillsSection;
