import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8qheiaz",
        "template_hphapdg",
        form.current,
        "CAwNOCA49sUVrUHww"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message.");
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="section-title">
        <h2>
          Contact <span>Me</span>
        </h2>
        <p>Let's build something amazing together.</p>
      </div>

      <div className="contact-container">
        {/* Left */}
        <div className="contact-info">
          <div className="info-box">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>nandanisingh09456@gmail.com</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhone className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 XXXXXX240</p>
            </div>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Location</h3>
              <p>Lucknow, Uttar Pradesh</p>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/nandanisingh09456"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nandani-singh-6a2b2333b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;