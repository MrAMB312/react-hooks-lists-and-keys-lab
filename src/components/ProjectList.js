import React from "react";
import ProjectItem from "./ProjectItem";


function ProjectList({ projects }) {
 
  console.log(projects);
  
  const projectElements = projects.map((project) => {
    return (
      <ProjectItem key={project.id} {...project} />
    )
  })
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectElements}</div>
    </div>
  );
}

export default ProjectList;
