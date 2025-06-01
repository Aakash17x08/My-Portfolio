import React from "react";
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
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { Link, Outlet } from "react-router-dom"; // For routing

const Projects = () => {
  return (
    <>
      <h1 className="project-heading">My Projects</h1>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-details">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="tools-label">Tools Used:</div>
              <div
                className="tools-list-and-github"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="tools-list"
                  style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
                >
                  {project.technologies.includes("React") && (
                    <span className="tool-item">
                      <FaReact className="icon react" /> React
                    </span>
                  )}
                  {project.technologies.includes("Node.js") && (
                    <span className="tool-item">
                      <FaNodeJs className="icon node" /> Node.js
                    </span>
                  )}
                  {project.technologies.includes("Express") && (
                    <span className="tool-item">
                      <SiExpress className="icon" /> Express
                    </span>
                  )}
                  {project.technologies.includes("MongoDB") && (
                    <span className="tool-item">
                      <FaDatabase className="icon db" /> MongoDB
                    </span>
                  )}
                  {project.technologies.includes("SQL") && (
                    <span className="tool-item">
                      <SiMysql className="icon" /> SQL
                    </span>
                  )}
                  {project.technologies.includes("SQLite") && (
                    <span className="tool-item">
                      <SiSqlite className="icon" /> SQLite
                    </span>
                  )}
                  {project.technologies.includes("Python") && (
                    <span className="tool-item">
                      <FaPython className="icon" /> Python
                    </span>
                  )}
                  {project.technologies.includes("Java") && (
                    <span className="tool-item">
                      <FaJava className="icon" /> Java
                    </span>
                  )}
                  {project.technologies.includes("Tkinter") && (
                    <span className="tool-item">🖼 Tkinter</span>
                  )}
                  {project.technologies.includes("JavaScript") && (
                    <span className="tool-item">
                      <FaJs className="icon" /> JavaScript
                    </span>
                  )}
                  {project.technologies.includes("HTML") && (
                    <span className="tool-item">
                      <FaHtml5 className="icon" /> HTML
                    </span>
                  )}
                  {project.technologies.includes("CSS") && (
                    <span className="tool-item">
                      <FaCss3Alt className="icon" /> CSS
                    </span>
                  )}
                  {project.technologies.includes("Bootstrap") && (
                    <span className="tool-item">
                      <SiBootstrap className="icon" /> Bootstrap
                    </span>
                  )}
                  {project.technologies.includes("TailwindCSS") && (
                    <span className="tool-item">
                      <SiTailwindcss className="icon" /> TailwindCSS
                    </span>
                  )}
                  {project.technologies.includes("Socket.IO") && (
                    <span className="tool-item">
                      <SiSocketdotio className="icon" /> Socket.IO
                    </span>
                  )}
                  {project.technologies.includes("Docker") && (
                    <span className="tool-item">
                      <SiDocker className="icon" /> Docker
                    </span>
                  )}
                  {project.technologies.includes("API") && (
                    <span className="tool-item">
                      <MdOutlineApi className="icon" /> API
                    </span>
                  )}
                  {project.technologies.includes("UI") && (
                    <span className="tool-item">
                      <HiOutlineSquares2X2 className="icon ui" /> UI
                    </span>
                  )}
                </div>

                {/* GitHub icon link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  style={{
                    marginLeft: "auto",
                    color: "#333",
                    fontSize: "1.5rem",
                  }}
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
