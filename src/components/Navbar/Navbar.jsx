import "./Navbar.css";
import { useState, useEffect } from "react";
import logo from "../../assets/logo/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={sticky ? "navbar sticky" : "navbar"}>
      <div className="logo">
  <img src={logo} alt="NS Logo" />

  <h2>
    Nandani<span>.</span>
  </h2>
</div>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
        <a
    href="/resume.pdf"
    download
    className="resume-btn"
  >
    Resume
  </a>
      </nav>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default Navbar;