import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import "../component_styling/Footer.css";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", details: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xpwrgrpo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", details: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer id="contact" className="footer-premium">
      <div className="footer-top-wrap">
        {/* Column 1: Branding & Contact Info */}
        <div className="footer-col footer-branding">
          <h2 className="footer-logo">AAKASH <span className="dim">MAURYA</span></h2>
          <p className="footer-tagline">
            Passionate Full-Stack Developer crafting high-performance 
            digital experiences and creative solutions.
          </p>

          <div className="footer-contact-info">
            <div className="contact-item">
              <MdEmail className="contact-icon" />
              <a href="mailto:aakash17x@gmail.com">aakash17x@gmail.com</a>
            </div>
            <div className="contact-item">
              <MdPhone className="contact-icon" />
              <div className="phone-stack">
                <span>+91 7378845745</span>
                {/* <span>+44 XXXX XXXXXXX</span> */}
              </div>
            </div>
            <div className="contact-item">
              <MdLocationOn className="contact-icon" />
              <span>India</span>
            </div>
          </div>

          <div className="footer-social-boxes">
            <a href="https://www.linkedin.com/in/aakash17x08" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Aakash17x08/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-col footer-links-col">
          <div className="links-group">
            <h3>NAVIGATE</h3>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#home">Home</a>
          </div>
          <div className="links-group">
            <h3>SOCIALS</h3>
            <a href="https://github.com/Aakash17x08/">GitHub</a>
            <a href="https://www.linkedin.com/in/aakash17x08">LinkedIn</a>
          </div>
        </div>

        {/* Column 3: Enquiry Form */}
        <div className="footer-col footer-form-col">
          <div className="enquiry-card">
            <h2>Let&apos;s build your <br /><span className="highlight">next vision.</span></h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>NAME</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>EMAIL</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>PROJECT DETAILS</label>
                <textarea
                  name="details"
                  placeholder="Describe your project..."
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  required
                />
              </div>

              <button 
                type="submit" 
                className="btn-send"
                disabled={status === "sending"}
              >
                {status === "sending" ? "SENDING..." : status === "sent" ? "SENT SUCCESS!" : "SEND ENQUIRY"}
              </button>
              {status === "error" && <p className="msg-error">Check connection and try again.</p>}
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>© 2025 AAKASH MAURYA. ALL RIGHTS RESERVED.</p>
        <div className="location-markers">
          <span>INDIA</span>
          <span className="dot">•</span>
          {/* <span>GLOBAL</span> */}
        </div>
        <p className="subsidiary">CRAFTED WITH PASSION</p>
      </div>
    </footer>
  );
};

export default Footer;
