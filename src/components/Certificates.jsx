import certifications from "../data/certificate";
import { motion } from "framer-motion";
import "../component_styling/Certificates.css";

const Certificates = () => {
  return (
    <div className="certificates-section">
      <h2 className="section-title">Certifications</h2>
      <div className="certificates-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="cert-image-container">
              <img src={cert.image} alt={cert.title} />
              <div className="cert-overlay">
                <span className="cert-year">{cert.year}</span>
              </div>
            </div>
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.provider}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
