import "./Projects.css";

import chatbot from "../../assets/projects/Chatbot.png";
import travel from "../../assets/projects/travel.png";
import ecommerce from "../../assets/projects/ecommerce.png";
import gallery from "../../assets/projects/gallery.png";

import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "AI Chatbot",
      image: chatbot,
      description:
        "Developed a Full Stack AI Chatbot using React, Node.js and Express.js. The chatbot provides intelligent responses through a clean and responsive user interface.",
      tech: ["React", "Node.js", "Express.js", "JavaScript"],
      github: "#",
      demo: "#",
      featured: true,
    },

    {
      title: "AI Travel Planner",
      image: travel,
      description:
        "An AI-powered travel planner that helps users discover destinations and create personalized travel plans.",
      tech: ["React", "Python", "JavaScript"],
      github: "#",
      demo: "#",
      featured: false,
    },

    {
      title: "E-Commerce Website",
      image: ecommerce,
      description:
        "Responsive e-commerce website with modern UI, product listings and shopping features.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/nandanisingh09456/React-projects/tree/main/ecommerce-project",
      demo: "#",
      featured: false,
    },

    {
      title: "Image Gallery",
      image: gallery,
      description:
        "Responsive image gallery with filtering, smooth animations and an attractive user interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/nandanisingh09456/Image--gallery",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-title">
        <h2>
          My <span>Projects</span>
        </h2>

        <p>Here are some of my recent projects.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className={`project-card ${
              project.featured ? "featured" : ""
            }`}
            key={index}
          >
            {project.featured && (
              <div className="featured-badge">
                <FaStar />
                Featured
              </div>
            )}

            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span className="tech-badge" key={i}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;