import React from "react";
import content from "../../data/content";
import ProjectCard from "../projectCard/projectCard";
import "./projectsSection.css";
import ProjetosReais from "../../assets/imgProjectsSection.png"
import ProjetosAcademicos from "../../assets/imgProjectsSection2.png"

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1 className="title">{content.projectsSection.title}</h1>
      <div className="containerSubtitle">
        <p className="subtitle">{content.projectsSection.subtitle1}</p>
        <img className="imagem" src={ProjetosReais} alt="projetos reais"/>
      </div>

      <div className="projects-grid">
        {content.projectsSection.project.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="projects-grid">
        {content.projectsSection.project.slice(3, 6).map((project) => (
            <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="containerSubtitle">
        <p className="subtitle">{content.projectsSection.subtitle2}</p>
        <img className="imagem" src={ProjetosAcademicos} alt="projetos reais"/>
      </div>

      <div className="projects-grid">
        {content.projectsSection.project.slice(6, 9).map((project) => (
            <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
