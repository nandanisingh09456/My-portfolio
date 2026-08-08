import "./Experience.css";
import { motion } from "framer-motion";
import { useState } from "react";

import frontendCertificate from "../../assets/internships/frontend.png";
import fullstackCertificate from "../../assets/internships/fullstack.png";

import {
  FaBriefcase,
  FaCalendarAlt,
  FaAward,
  FaTimes,
} from "react-icons/fa";

function Experience() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const experiences = [
    {
      role: "Frontend Development Intern",
      company: "CodeAlpha",
      type: "Frontend Development",
      duration: "June-July 2026",
    achievement:
  "Built responsive and interactive user interfaces using React.",  

      description: [
        "Developed responsive web interfaces using HTML, CSS and JavaScript.",
        "Built reusable React components for modern web applications.",
        "Improved website responsiveness and user experience.",
        "Worked with Git & GitHub for version control and collaboration.",
      ],

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "GitHub",
      ],

      certificate: frontendCertificate,
    },

    {
      role: "Full Stack Development Intern",
      company: "CodeAlpha",
      type: "Full Stack Development",
      duration: "June-July 2026",
      achievement:
  "Developed full stack applications with REST APIs and backend integration.",

      description: [
        "Developed full stack applications using React, Node.js and Express.js.",
        "Built REST APIs and connected frontend with backend services.",
        "Implemented authentication and routing.",
        "Debugged and optimized application performance.",
      ],

      tech: [
        "React",
        "Node.js",
        "Express.js",
        "JavaScript",
        "GitHub",
      ],

      certificate: fullstackCertificate,
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="section-title">
        <h2>
          My <span>Experience</span>
        </h2>

        <p>Professional Journey</p>
      </div>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="experience-header">
              <div>
                <h3>
                  <FaBriefcase /> {exp.role}
                </h3>

     <h4>{exp.company}</h4>

      <span className="internship-type">
       {exp.type}
        </span>
              </div>

              <span className="duration">
                <FaCalendarAlt />
                {exp.duration}
              </span>
            </div>

            <ul className="experience-list">
              {exp.description.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>

            <div className="experience-tech">
              {exp.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="experience-footer">
              <div className="achievement">
                <FaAward />
               {exp.achievement}
              </div>

              <button
                className="certificate-btn"
                onClick={() =>
                  setSelectedCertificate(exp.certificate)
                }
              >
                View Certificate
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal */}

      {selectedCertificate && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedCertificate(null)}
            >
              <FaTimes />
            </button>

            <img
              src={selectedCertificate}
              alt="Internship Certificate"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Experience;