import React from "react";
import "../component_styling/About.css";
import certifications from "../data/certificate";

// React Icons
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiExpress, SiMysql, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "SQL", icon: <SiMysql /> },
];

const About = () => {
  return (
    <div id="main" className="about-container">
      <div className="profile-section">
        <img
          src="/assets/profilePhoto.jpg"
          alt="Aakash"
          className="profile-image"
        />
        <div className="profile-info">
          <h1>Aakash Maurya</h1>
          <h2 className="rotating-title">
            <span>Full-Stack Web Developer</span>
            <span>Frontend Developer</span>
            <span>MERN Stack Developer</span>
            <span>Backend Developer</span>
            <span>Student</span>
          </h2>
          <p>
            Dedicated student developer skilled in creating functional and
            user-friendly applications through thoughtful design and coding...
          </p>
        </div>
      </div>

      {/* Journey + Skills */}
      <section className="about-skills-section">
        <div className="my-journey">
          <h1>My Journey</h1>
          <p>
            I am a student developer with a strong passion for building
            efficient and user-friendly web applications...
          </p>
          <p>
            I enjoy chess and badminton to stay balanced, and I’m always
            exploring new tech to apply in real-world challenges.
          </p>
          <p>
            My goal is to grow as a developer and contribute to meaningful
            projects.
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

        <div className="technical-skills">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="education-section">
        <h3>Education</h3>
        <div className="cards">
          <div className="card">
            <h4>Bachelor of Computer Application</h4>
            <p>JSPM University</p>
            <p className="duration">2023 - 2026</p>
            <p className="note">Current CGPA: 8.33+</p>
          </div>
          <div className="card">
            <h4>Higher Secondary School</h4>
            <p>Inspire Jr College</p>
            <p className="duration">2022 - 2023</p>
            <p className="note">Successfully completed</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="experience-section">
        <h3>Professional Experience</h3>
        <div className="cards">
          <div className="card">
            <h4>Web Full Stack Developer Internship</h4>
            <p>Eduskills</p>
            <p className="duration">Apr 2024 – Jun 2024 | AICTE</p>
            <ul>
              <li>Enhanced skills via practical projects</li>
              <li>Developed apps using React & Node.js</li>
              <li>Implemented backend DB optimizations</li>
            </ul>
            <div className="show-exp hover-box">
              <img className="img" src="/assets/DEV.png" alt="Web development" />
              <h6>View Certificate</h6>
            </div>
          </div>
          <div className="card">
            <h4>Google AI/ML Virtual Internship</h4>
            <p>Eduskills</p>
            <p className="duration">Jul 2024 – Aug 2024 | AICTE</p>
            <ul>
              <li>Learned fundamentals of AI & ML</li>
              <li>Worked on real ML projects</li>
              <li>Used Python + ML libraries</li>
            </ul>
            <div className="show-exp hover-box">
              <img className="img" src="/assets/AIML.png" alt="AIML experience" />
              <h6>View Certificate</h6>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates + Hover Gallery */}
      <h1>Certificates</h1>
      <section className="certifications-section">
        <div id="page3">
          <div id="elem-container">
            {certifications.map((cert) => (
              <div className="elem hover-box" key={cert.title}>
                <img className="img" src={cert.image} alt={cert.title} />
                <div className="overlay"></div>
                <h2>{cert.title}</h2>
                {/* <p>
                  {cert.provider} - {cert.year}
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <form
          className="contact-form"
          action="https://formspree.io/f/movaqvan"
          method="POST"
        >
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Your message" required />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default About;
