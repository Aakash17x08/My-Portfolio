// src/pages/Home.jsx
import "../component_styling/Home.css";

// Import sections
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="home-container">
      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      {/* We don't wrap in another id="projects" section because Projects component already has it */}
      <Projects />

      {/* Contact Section at the last */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
