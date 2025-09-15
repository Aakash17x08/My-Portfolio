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
