import { useState, useEffect } from "react";
import certifications from "../data/certificate";
import "../component_styling/About.css";

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
  FaServer,
  FaChartLine,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiNumpy,
  SiPandas,
  SiScipy,
  SiPlotly,
  SiMongodb,
  SiFlask,
} from "react-icons/si";

const skills = [
  { name: "NumPy", icon: <SiNumpy color="#013243" /> },
  { name: "Pandas", icon: <SiPandas color="#150458" /> },
  { name: "SciPy", icon: <SiScipy color="#8caae6" /> },
  { name: "Matplotlib", icon: <FaChartLine color="#11557c" /> },
  { name: "Seaborn", icon: <FaChartLine color="#4c72b0" /> },
  { name: "Plotly", icon: <SiPlotly color="#3f4f75" /> },
  { name: "React.js", icon: <FaReact color="#61DAFB" /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "Express.js", icon: <SiExpress color="inherit" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
  { name: "RestAPI", icon: <FaServer color="inherit" /> },
  { name: "Flask", icon: <SiFlask color="inherit" /> },
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "Java", icon: <FaJava color="#ed8b00" /> },
];

const About = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleSkills = isMobile && !showAllSkills ? skills.slice(0, 5) : skills;

  return (
    <div id="main" className="about-container">
      {/* Profile Section */}
      <div className="profile-section">
        <img
          src="/assets/photo.png"
          alt="Aakash"
          className="profile-image"
        />
        <div className="profile-info">
          <h1>
            Aakash Maurya
          </h1>
          <h2>
            Full-Stack Web Developer
          </h2>
          <p>
            Dedicated student developer skilled in creating functional and
            user-friendly applications through thoughtful design and coding.
          </p>
        </div>
      </div>

      {/* Journey Section */}
      <section className="about-skills-section">
        <div className="my-journey">
          <h3>
            My Journey
          </h3>
          <div className="journey-content">
            <p>
              I am a student developer with a strong passion for building
              efficient and user-friendly web applications.
            </p>
            <p>
              I enjoy chess and badminton to stay balanced, and I’m always
              exploring new tech to apply in real-world challenges.
            </p>
            <p>
              Right now I am exploring datascience and preparing for DSA and believe me with the end of 2026 I will achieve something big.
              Till now I have given many interview like cognizant, capgemini, tcs, house of cgi and guess what I have been selcted in most of the companies that I have mentioned.
            </p>
          </div>

          <div style={{ marginTop: "20px" }}>
            <a
              href="/assets/Aakash_Maurya_Resume.pdf"
              className="primary-btn"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "10px 20px", background: "var(--heading-color)", color: "var(--bg-color)", textDecoration: "none", borderRadius: "5px", fontWeight: "bold" }}
            >
              📄 Get Resume
            </a>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="technical-skills">
          <h3>
            Technical Skills
          </h3>
          <div className="skills-grid">
            {visibleSkills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
              >
                <span className="icon-skill">
                  {skill.icon}
                </span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>

          {isMobile && (
            <div className="skills-toggle-container">
              <button
                className={`skills-toggle-btn ${showAllSkills ? "expanded" : ""}`}
                onClick={() => setShowAllSkills(!showAllSkills)}
              >
                {showAllSkills ? "Show Less" : "View More"}
                <span className="skills-toggle-icon">▼</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Education */}
      <section>
        <h3><FaGraduationCap /> Education</h3>
        <div className="cards">
          <div className="card">
            <h4>Bachelor of Computer Application</h4>
            <p>JSPM University</p>
            <p className="duration">2023 - 2026</p>
            <p className="note">Current CGPA: 8.48</p>
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
      <section>
        <h3><FaBriefcase />Experience</h3>
        <div className="cards">
          <div className="card">
            <h4>Full Stack Developer Internship</h4>
            <p>House of CGI</p>
            <p className="duration">March 2026 – present</p>
            <ul>
              <li>Optimized website performance through Cloudflare CDN integration, caching strategies, lazy
              loading, and asset optimization, significantly reducing page load times.</li>
              <li>Developed and maintained full-stack applications using React.js, Node.js, and REST APIs while
              following modular architecture and clean coding practices.</li>
              <li>Built an automated lead-generation and data collection solution that reduced manual effort by
              approximately 50% and improved sales team productivity</li>
            </ul>
            {/* <div style={{ marginTop: "10px", fontWeight: "bold", cursor: "pointer" }}>
               View Certificate
            </div> */}
          </div>

          <div className="card">
            <h4>Web Full Stack Developer Internship</h4>
            <p>Eduskills</p>
            <p className="duration">Apr 2024 – Jun 2024 | AICTE</p>
            <ul>
              <li>Enhanced skills via practical projects</li>
              <li>Developed apps using React & Node.js</li>
              <li>Implemented backend DB optimizations</li>
            </ul>
            {/* <div style={{ marginTop: "10px", fontWeight: "bold", cursor: "pointer" }}>
               View Certificate
            </div> */}
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
            {/* <div style={{ marginTop: "10px", fontWeight: "bold", cursor: "pointer" }}>
              View Certificate
             </div> */}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default About;
