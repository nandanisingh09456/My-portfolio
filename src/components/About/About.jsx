import "./About.css";
import profile from "../../assets/images/profile.jpeg";

import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaLaptopCode,
  FaAward,
} from "react-icons/fa";

function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="section-title">
        <h2>
          About <span>Me</span>
        </h2>

        <p>Get to know me better</p>
      </div>

      <div className="about-container">
        {/* Left Side */}

        <motion.div
          className="about-image"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={profile} alt="Nandani Singh" />
        </motion.div>

        {/* Right Side */}

        <motion.div
          className="about-content"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>AI & Full Stack Developer</h3>

          <p>
            I'm <strong>Nandani Singh</strong>, a passionate AI and Full Stack
            Developer with hands-on experience in building responsive web
            applications using React, Node.js, Express.js, JavaScript and
            Python.
          </p>

          <p>
            I enjoy developing modern user interfaces, integrating APIs,
            building full stack applications and solving real-world problems
            through technology. I'm always eager to learn new technologies and
            improve my development skills.
          </p>

      <div className="about-cards">

  <motion.div
    className="about-card"
    whileHover={{ y: -10, scale: 1.03 }}
  >
    <FaGraduationCap className="card-icon" />

    <h4>Education</h4>

    <p>B.Tech CSE (AI)</p>

    <span>University of Lucknow</span>
  </motion.div>

  <motion.div
    className="about-card"
    whileHover={{ y: -10, scale: 1.03 }}
  >
    <FaLaptopCode className="card-icon" />

    <h4>Experience</h4>

    <p>Frontend & Full Stack</p>

    <span>CodeAlpha Internship</span>
  </motion.div>

  <motion.div
    className="about-card"
    whileHover={{ y: -10, scale: 1.03 }}
  >
    <FaAward className="card-icon" />

    <h4>Certificates</h4>

    <p>Python Programming</p>

    <span>Web Development</span>
  </motion.div>

</div>

          <motion.a
            href="#projects"
            className="about-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;