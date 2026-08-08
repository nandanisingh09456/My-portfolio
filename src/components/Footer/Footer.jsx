import "./Footer.css";
import logo from "../../assets/logo/logo.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

    <div className="footer-brand">
  <div className="footer-logo">
    <img src={logo} alt="NS Logo" />

    <h2>
      Nandani<span>.</span>
    </h2>
  </div>

  <p>
    AI & Full Stack Developer passionate about building
    modern and responsive web applications.
  </p>
</div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h3>Connect With Me</h3>

          <div className="social-icons">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:your-email@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Nandani Singh. All Rights Reserved.
        </p>

        <p className="made-with">
          Made with <FaHeart /> using React
        </p>
      </div>
    </footer>
  );
}

export default Footer;