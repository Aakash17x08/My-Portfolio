import { FaPaperPlane, FaEnvelope, FaUser, FaCommentAlt } from "react-icons/fa";
import "../component_styling/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        

        <div className="contact-form-wrapper">
          <form
            action="https://formspree.io/f/movaqvan"
            method="POST"
          >
            <div className="form-group">
              <label className="form-label">
                <FaUser /> Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <FaEnvelope /> Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <FaCommentAlt /> Message
              </label>
              <textarea
                name="message"
                placeholder="Your message..."
                required
                rows="5"
                className="form-textarea"
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
