import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <form
          className="contact-form"
          action="https://formspree.io/f/movaqvan"
          method="POST"
        >
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              placeholder="Your message"
              required
            ></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
