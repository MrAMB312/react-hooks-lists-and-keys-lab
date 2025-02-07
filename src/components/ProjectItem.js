import React from "react";


function ProjectItem({ name, about, technologies }) {
 
  function TechnologyItem(props) {
    return <span>{props.technology}</span>;
  }

  const technologiesElements = technologies.map((technology) => {
    return <TechnologyItem key={technology} technology={technology} />;
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesElements}
      </div>
    </div>
  );
}

export default ProjectItem;