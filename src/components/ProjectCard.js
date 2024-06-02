// src/components/ProjectCard.js
import React from 'react';
import {
  ProjectCard as Card,
  ProjectImage,
  ProjectDetails,
  ProjectTitle,
  ProjectDescription,
} from '../styles';

const ProjectCard = ({ project }) => (
  <a href={project.link} target="_blank" rel="noopener noreferrer">
    <Card>
      <ProjectImage src={project.image} alt={project.title} />
      <ProjectDetails>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
      </ProjectDetails>
    </Card>
  </a>
);

export default ProjectCard;