import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      level: "Advanced",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      level: "Advanced",
    },
    {
      icon: <FaJsSquare />,
      name: "JavaScript",
      level: "Intermediate",
    },
    {
      icon: <FaReact />,
      name: "React",
      level: "Intermediate",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      level: "Intermediate",
    },
    {
      icon: <FaPython />,
      name: "Python",
      level: "Intermediate",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      level: "Version Control",
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <h2>
          My <span>Skills</span>
        </h2>
        <p>Technologies I work with</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>

            <h3>{skill.name}</h3>

            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;