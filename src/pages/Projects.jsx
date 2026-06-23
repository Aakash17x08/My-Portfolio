import { useState } from "react";
import projects from "../data/project_data";
import "../component_styling/Project.css";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaExternalLinkAlt
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiSqlite,
  SiBootstrap,
  SiTailwindcss,
  SiSocketdotio,
  SiDocker,
} from "react-icons/si";
import { MdOutlineApi } from "react-icons/md";

const techIcons = {
  "React": <FaReact className="icon react" />,
  "Node.js": <FaNodeJs className="icon node" />,
  "Express": <SiExpress className="icon node" />,
  "MongoDB": <FaDatabase className="icon db" />,
  "SQL": <SiMysql className="icon db" />,
  "SQLite": <SiSqlite className="icon db" />,
  "HTML": <FaHtml5 className="icon ui" />,
  "CSS": <FaCss3Alt className="icon ui" />,
  "JavaScript": <FaJs className="icon ui" />,
  "Python": <FaPython className="icon" />,
  "Java": <FaJava className="icon" />,
  "Tailwind": <SiTailwindcss className="icon ui" />,
  "Bootstrap": <SiBootstrap className="icon ui" />,
  "Socket.io": <SiSocketdotio className="icon" />,
  "Docker": <SiDocker className="icon" />,
  "API": <MdOutlineApi className="icon" />,
};

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const filters = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "other", label: "Others" },
  ];

  return (
    <div id="projects" className="projects-wrapper">
      <h1 className="project-heading">My Projects</h1>

      <div className="filter-buttons">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={filter === f.id ? "active" : ""}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-container">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="image-container">
               <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <span className="category-badge">{project.category}</span>
            </div>
           
            <div className="project-details">
              <div className="project-header">
                <h2 className="project-title">{project.title}</h2>
                
              </div>
              <p className="project-description">{project.description}</p>
              
              <div className="tools-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tool-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Code"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;