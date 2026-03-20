import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../component_styling/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h3>Let&apos;s Connect</h3>
          <p>
            I&apos;m always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/Aakash17x08/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aakash17x08"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2024 Aakash Maurya. All rights reserved.</span>
        <a href="mailto:aakash17x@gmail.com">aakash17x@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
