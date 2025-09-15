import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiDocker,
  SiBootstrap,
  SiTailwindcss,
  SiSocketdotio,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import "../component_styling/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
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

      <hr className="hr"/>

      <div className="footer-top">
        <div className="footer-left">
          <h3>Let's Connect</h3>
          <p>
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
        </div>
        <div className="footer-socials">
          <a
            href="https://github.com/Aakash17x08/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aakash17x08"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 Aakash Maurya. All rights reserved.</span>
        <a href="aakash17x@gmail.com">aakash17x@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
