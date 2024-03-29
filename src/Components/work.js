import React from 'react';
import WorkCards from "./workcards";
import projectData from "./workData";
import "./workcards.css"

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {projectData.map((val) => {
          return (
            <WorkCards
              key={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
