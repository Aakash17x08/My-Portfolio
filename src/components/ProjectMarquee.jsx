import React from 'react';
import projects from '../data/project_data';
import '../component_styling/ProjectMarquee.css';

const ProjectMarquee = () => {
  // Duplicate the projects array for a seamless loop
  const marqueeProjects = [...projects, ...projects];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        {marqueeProjects.map((project, index) => (
          <div key={`${project.id}-${index}`} className="marquee-card">
            <div className="marquee-image-container">
              <img src={project.image} alt={project.title} className="marquee-image" />
              <span className="marquee-category-badge">{project.category}</span>
            </div>
            <div className="marquee-info">
              <div className="marquee-header">
                <h3 className="marquee-project-title">{project.title}</h3>
                {project.liveDemo && (
                  <span className="marquee-url">
                    {project.liveDemo.replace("https://", "").replace("http://", "").split("/")[0]}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectMarquee;
