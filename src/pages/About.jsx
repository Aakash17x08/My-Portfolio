import React from "react";
import "../component_styling/About.css";
// React Icons
import {
  FaReact,
  FaVuejs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaAws,
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
import { CiSettings } from "react-icons/ci";

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
  {name: "Tailwind" , icon: <SiTailwindcss/>},
  {name:"MongoDB", icon:<FaDatabase/>},
  {name:"SQL", icon:<SiMysql/> }
];

const certifications = [
  {
    title: "Web Development Certificate",
    provider: "Eduskills",
    year: "2025",
  },
  {
    title: "Python Programming",
    provider: "Linkedin Learning",
    year: "2025",
  },
  {
    title: "Java Programming",
    provider: "Linkedin Learning",
    year: "2025",
  },
];

const About = () => {
  return (
    <div className="about-container">
      <div className="profile-section">
        <img src="/assets/profilePhoto.jpg" alt="Aakash's Photo" className="profile-image" />
        <div className="profile-info">
          <h1>Aakash Maurya</h1>
          <h2>MERN Stack Deeloper</h2>
          <p>
            Dedicated student developer skilled in creating functional and
            user-friendly applications through thoughtful design and coding...
          </p>
        </div>
      </div>

      {/* about and skill section */}
      <section className="about-skills-section">
        <div className="my-journey">
          <h1>My Journey</h1>
          <p>
            I am a student developer with a strong passion for building
            efficient and user-friendly web applications. Throughout my learning
            journey, I have completed two virtual internships: a Full Stack Web
            Development internship with Eduskills and a Google AI/ML virtual
            internship. These experiences helped me gain hands-on practice and
            deepen my technical skills.
          </p>

          <p>
            Beyond coding, I enjoy spending my free time playing chess and
            badminton, activities that help keep my mind sharp and balanced. I
            am always eager to learn new technologies and apply creative
            problem-solving to real-world challenges.
          </p>

          <p>
            My goal is to grow as a developer while contributing to meaningful
            projects and collaborating with others who share my enthusiasm for
            technology.
          </p>
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

      {/* EDUCATION */}
      <section className="education-section">
        <h3>Education</h3>
        <div className="cards">
          <div className="card">
            <h4>Bachelor of Computer Application</h4>
            <p>JSPM University</p>
            <p className="duration">2023 - 2026</p>
            <p className="note">Current CGPA is more than 8.33+</p>
          </div>
          <div className="card">
            <h4>Higher Secondary School</h4>
            <p>Inspire Jr College</p>
            <p className="duration">2022 - 2023</p>
            <p className="note">Successfully completed </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience-section">
        <h3>Professional Experience</h3>
        <div className="cards">
          <div className="card">
            <h4>Web Full Stack Developer Internship</h4>
            <p>Eduskills</p>
            <p className="duration">2024/April – 2024/June | AICTE Approved</p>
            <ul>
              <li>
                Enhanced and refined existing technical skills through practical
                projects
              </li>
              <li>
                Developed and deployed responsive web applications using React
                and Node.js
              </li>
              <li>
                Implemented database management and optimized query performance
              </li>
            </ul>
          </div>

          <div className="card">
            <h4>Google AI/ML Virtual Internship</h4>
            <p>Eduskills</p>
            <p className="duration">2024/July – 2024/August | AICTE Approved</p>
            <ul>
              <li>
                Learned fundamentals of Artificial Intelligence and Machine
                Learning
              </li>
              <li>
                Worked on practical projects involving data analysis and model
                training
              </li>
              <li>
                Applied Python and relevant ML libraries to solve real-world
                problems
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certificate  */}
      <section className="certifications-section">
        <h2 className="section-title">Certifications</h2>
        <div className="certification-cards">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-icon">🌟</div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-provider">{cert.provider}</p>
              <p className="cert-year">{cert.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
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
            <textarea
              name="message"
              placeholder="Your message"
              required
            ></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default About;
