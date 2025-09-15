// src/pages/Home.jsx
import React from "react";
import "../component_styling/Home.css";
import projects from "../data/project_data";
import { Link } from "react-router-dom";
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
import { TbBrandCpp } from "react-icons/tb";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Dream. Develop. Deploy.</h1>
          <h2 className="rotating-title">
            <span>Full-Stack Web Developer</span>
            <span>Frontend Developer</span>
            <span>MERN Stack Developer</span>
            <span>Backend Developer</span>
            <span>Student</span>
          </h2>

          <p>
            I’m Aakash — I design and develop web applications that are not just
            beautiful, but blazing fast and user-focused.
          </p>
          <div
            className="hero-buttons"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <a
              href="/assets/Aakash_Maurya_Resume.pdf"
              className="primary-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Resume
            </a>
            
          </div>
        </div>
        <div className="hero-image">
          <img src="/assets/profilePhoto.jpg" alt="Aakash's profile" />
        </div>
      </section>

      <section className="skills-section">
        <h3>What I Do</h3>
        <div className="skills-grid">
          <div className="skill-card">
            <i className="icon-skill">💻</i>
            <h4>Frontend Development</h4>
            <p>
              Creating responsive, interactive user interfaces with modern
              frameworks.
            </p>
          </div>
          <div className="skill-card">
            <i className="icon-skill">🧰</i>
            <h4>Backend Development</h4>
            <p>Building robust server-side applications and APIs.</p>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h3>Featured Projects</h3>
        <div className="projects-container">
          {projects.slice(0, 3).map((project) => (
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
      </section>

      <section className="tech-section">
        <h3>Technical Skills</h3>
        <div className="tech-icons">
          <div>
            <i>
              <FaReact className="icon react" />
            </i>
            <p>Frontend Development</p>
          </div>
          <div>
            <i>
              <FaNodeJs className="icon node" />
              <SiExpress className="icon" />
              <SiSocketdotio className="icon" />
              {/* <MdOutlineApi className="icon" /> */}
            </i>
            <p>Backend Development</p>
          </div>
          <div>
            <i>
              <FaDatabase className="icon db" />
              <SiMysql className="icon" />
              {/* <SiSqlite className="icon" /> */}
              <SiDocker className="icon" />
            </i>
            <p>Database</p>
          </div>
          <div>
            <i>
              <FaJava className="icon" />
              <TbBrandCpp className="icon" />
              <FaPython className="icon" />
            </i>
            <p>Languages</p>
          </div>
          <div>
            <i>
              <FaHtml5 className="icon" />
              <FaCss3Alt className="icon" />
              <SiBootstrap className="icon" />
              <SiTailwindcss className="icon" />
              <FaJs className="icon" />
            </i>
            <p>Web Technologies</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
