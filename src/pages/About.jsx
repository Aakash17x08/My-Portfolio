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
  { name: "NumPy", icon: <SiNumpy className="icon python" /> },
  { name: "Pandas", icon: <SiPandas className="icon python" /> },
  { name: "SciPy", icon: <SiScipy className="icon python" /> },
  { name: "Matplotlib", icon: <FaChartLine className="icon js" /> },
  { name: "Seaborn", icon: <FaChartLine className="icon js" /> },
  { name: "Plotly", icon: <SiPlotly className="icon react" /> },
  { name: "React.js", icon: <FaReact className="icon react" /> },
  { name: "JavaScript", icon: <FaJs className="icon js" /> },
  { name: "Node.js", icon: <FaNodeJs className="icon node" /> },
  { name: "Express.js", icon: <SiExpress className="icon express" /> },
  { name: "MongoDB", icon: <SiMongodb className="icon db" /> },
  { name: "MySQL", icon: <SiMysql className="icon sql" /> },
  { name: "RestAPI", icon: <FaServer className="icon express" /> },
  { name: "Flask", icon: <SiFlask className="icon python" /> },
  { name: "HTML", icon: <FaHtml5 className="icon html" /> },
  { name: "CSS", icon: <FaCss3Alt className="icon css" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="icon tailwind" /> },
  { name: "Git", icon: <FaGitAlt className="icon git" /> },
  { name: "Python", icon: <FaPython className="icon python" /> },
  { name: "Java", icon: <FaJava className="icon java" /> },
];

const About = () => {
  return (
    <div id="main" className="about-container">
      {/* Profile Section */}
      <div className="profile-section">
        <img
          src="/assets/profilePhoto.jpg"
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
            {skills.map((skill, index) => (
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
              <li>Building websites</li>
              <li>Understaning how to host website</li>
              <li>Delivering websites to client.</li>
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

      {/* Certificates */}
      <section>
        <h3> Certificates</h3>
        <div className="cards">
          {certifications.map((cert) => (
            <div 
              key={cert.title} 
              className="card"
              style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}
            >
              <div style={{ width: "100%", height: "200px", background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} 
                />
              </div>
              <div style={{ padding: "15px", flexGrow: 1 }}>
                <h4 style={{ margin: "0", fontSize: "1.1rem" }}>{cert.title}</h4>
                <p style={{ margin: "5px 0 0", fontSize: "0.9rem", color: "gray" }}>{cert.provider} • {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
