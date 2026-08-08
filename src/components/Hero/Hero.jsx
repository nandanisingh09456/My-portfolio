import "./Hero.css";
import profile from "../../assets/images/profile.jpeg";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left */}

        <motion.div
          className="hero-left"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          <span className="available">
            🟢 Available for Internship
          </span>

          <h3>Hello, I'm 👋</h3>

          <h1>Nandani Singh</h1>

          <TypeAnimation
            sequence={[
              "AI & Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Python Developer",
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="typing"
          />

          <p>
            Passionate AI & Full Stack Developer with experience
            in building responsive web applications using
            React, Node.js, Express.js, JavaScript and Python.
          </p>

         <div className="hero-buttons">
  <a
  href="/resume.pdf"
  download="Nandani-Singh-Resume.pdf"
  className="primary-btn"
>
  📄 Download Resume
</a>

  <a
    href="#contact"
    className="secondary-btn"
  >
    Hire Me
  </a>
</div>

          <div className="hero-social">

            <a href="https://github.com/nandanisingh09456">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/nandani-singh-6a2b2333b/">
              <FaLinkedin />
            </a>

            <a href="mailto:nandanisingh09456@gmail.com">
              <FaEnvelope />
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <h2>4+</h2>
              <span>Projects</span>
            </div>

            <div>
              <h2>5+</h2>
              <span>Certificates</span>
            </div>

            <div>
              <h2>2</h2>
              <span>Internships</span>
            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          className="hero-right"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
        >

          <img src={profile} alt="Nandani Singh" />

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;