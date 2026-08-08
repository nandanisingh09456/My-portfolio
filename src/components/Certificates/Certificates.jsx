import "./Certificates.css";
import { useState } from "react";
import { FaAward, FaTimes } from "react-icons/fa";

import python from "../../assets/certificates/python.png";
import web from "../../assets/certificates/web-development.png";
import github from "../../assets/certificates/github-workflow.png";

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: "Python Programming",
      organization: "CodeAlpha",
      image: python,
    },
    {
      title: "Web Development",
      organization: "CodeAlpha",
      image: web,
    },
    {
      title: "GitHub Workflow Mastery",
      organization: "Unstop",
      image: github,
    },
     {
      title: "Node.js",
      organization: "Unstop",
      image: github,
    },
     {
      title: "HTML with AI",
      organization: "Unstop",
      image: github,
    },
  ];

  return (
    <section className="certificates" id="certificates">
      <div className="section-title">
        <h2>
          My <span>Certifications</span>
        </h2>

        <p>Professional Certifications</p>
      </div>

      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <img src={certificate.image} alt={certificate.title} />

            <div className="certificate-content">
              <FaAward className="certificate-icon" />

              <h3>{certificate.title}</h3>

              <h4>{certificate.organization}</h4>

              <button
                className="certificate-btn"
                onClick={() => setSelectedCertificate(certificate)}
              >
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

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
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
            />

            <h3>{selectedCertificate.title}</h3>

            <p>{selectedCertificate.organization}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;