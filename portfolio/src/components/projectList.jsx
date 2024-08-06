import React from "react";
import ProjectCard from "./projectCards";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
