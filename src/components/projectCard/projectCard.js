import React from "react";
import { FaExternalLinkAlt, FaGithub, FaTruck, FaYoutube, FaLinkedin } from "react-icons/fa"; 
import { RiCustomerServiceFill } from "react-icons/ri";
import { GrPersonalComputer } from "react-icons/gr";
import "./projectCard.css";

const ProjectCard = ({ project }) => {
  // Função para escolher o ícone de acordo com o followup
  const getFollowupIcon = (followup) => {
    switch (followup) {
      case "logistica":
        return <FaTruck size={30} />;
      case "customer service":
        return <RiCustomerServiceFill size={30} />;
      case "tecnologia":
        return <GrPersonalComputer size={30} />;
      default:
        return null; // Caso o followup não seja reconhecido, não mostra nenhum ícone
    }
  };

  return (
    <div className="project-card">
      {/* Ícone superior esquerdo (followup) */}
      <div className="top-left-icons">
        {getFollowupIcon(project.followup)}
      </div>

      {/* Ícones de link superior direito */}
      <div className="top-right-icon">
        {project.linkedinUrl && (
          <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}
        {project.youTubeUrl && (
          <a href={project.youTubeUrl} target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        )}
        {project.modalUrl && (
          <a href={project.modalUrl} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt />
          </a>
        )}
      </div>

      {/* Ano */}
      <p className="project-year">{project.year}</p>

      {/* Summary e description */}
      <h3 className="project-summary">{project.summary}</h3>
      <p className="project-description">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
