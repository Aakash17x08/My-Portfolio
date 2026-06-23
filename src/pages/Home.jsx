import { Link } from "react-router-dom";
import "../component_styling/Home.css";

// Import sections
import About from "./About";
import ProjectMarquee from "../components/ProjectMarquee";
import Certificates from "../components/Certificates";

const Home = () => {
  return (
    <div className="home-container">
      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectMarquee />
        <div className="home-projects-cta">
          <Link to="/projects" className="explore-btn">
            Explore All Projects
          </Link>

          <div className="interested-text-container">
            <h2 className="interested-title">
              Interested in <br /> working together ?
            </h2>
            <a href="mailto:aakash17x@gmail.com" className="interested-email">
              aakash17x@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates">
        <Certificates />
      </section>
    </div>
  );
};

export default Home;
