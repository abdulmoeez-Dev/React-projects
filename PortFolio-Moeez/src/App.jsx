import React, { useEffect } from "react";
import "./App.css";
import profilepic from "./assets/profilepic.jfif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import "@fontsource/orbitron/600.css"; // 600 weight wala Orbitron

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const revealOnScroll = () => {
      sections.forEach((sec) => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          sec.classList.add("reveal");
        }
      });
    };

    const smoothScroll = (e) => {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href").startsWith("#")
      ) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("scroll", revealOnScroll);
    document
      .querySelector(".nav-links")
      .addEventListener("click", smoothScroll);
    revealOnScroll();

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      document
        .querySelector(".nav-links")
        .removeEventListener("click", smoothScroll);
    };
  }, []);

  return (
    <>
      {/* ================= Navbar ================= */}
      <nav className="navbar">
        <div className="logo">
          <span className="symbol">&lt;/&gt;</span> AM |{" "}
          <span>Frontend Developer</span>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* ================= Hero Section ================= */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hello, I’m <span>Abdul Moeez</span>
            </h1>
            <p>
              A passionate <strong>Frontend Web Developer</strong> 🚀
            </p>
            <button className="premium-btn">
              <i className="fas fa-crown"></i> Backend in process @ SMIT
            </button>
          </div>
          <div className="hero-img">  
            <img src={profilepic} alt="Profile" />
          </div>
        </div>
      </section>

      {/* ================= About ================= */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I am <strong>Abdul Moeez</strong>, a creative and detail-oriented
          <span> Frontend Web Developer</span> with expertise in crafting
          responsive and user-friendly digital experiences. I focus on writing
          clean code, modern UI design, and building interactive applications
          that feel premium and intuitive.
        </p>
        <div className="skills">
          <h3>Skills</h3>
          <div className="skill-icons">
            <FontAwesomeIcon icon={faHtml5} className="html" title="HTML5" />
            <FontAwesomeIcon icon={faCss3Alt} className="css" title="CSS3" />
            <FontAwesomeIcon icon={faJs} className="js" title="JavaScript" />
            <FontAwesomeIcon icon={faReact} className="react" title="React" />
          </div>
        </div>
      </section>

      {/* ================= Projects ================= */}
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {/* E-commerce Website */}
          <div className="project-card">
            <h3>🛒 E-commerce Website</h3>
            <p>
              A fully responsive online store built with{" "}
              <strong>React, React Router, Context API, and modern CSS</strong>.
              Features include product listing, search & filter functionality,
              add-to-cart system, and smooth checkout flow. Deployed on Netlify.
            </p>
            <a
              href="https://shopzone-onlineshop.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Project
            </a>
          </div>

          {/* GitHub Profile Finder */}
          <div className="project-card">
            <h3>🔍 GitHub Profile Finder</h3>
            <p>
              A React-based application that uses the{" "}
              <strong>GitHub API</strong> to fetch and display user profiles
              with repositories, followers, and bio. Built with{" "}
              <strong>Axios</strong> for API calls and styled with modern
              responsive design.
            </p>
            <a
              href="https://githubprofile-finding.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Project
            </a>
          </div>

          {/* Portfolio Website */}
          <div className="project-card">
            <h3>⚡ Portfolio Website</h3>
            <p>
              A responsive portfolio built with{" "}
              <strong>React & modern CSS animations</strong>. It showcases my
              skills, projects, and contact details in an elegant way with
              smooth scrolling and reveal animations.
            </p>
          </div>

          {/* Todo App */}
          <div className="project-card">
            <h3>📝 Todo App</h3>
            <p>
              A feature-rich todo app developed with <strong>React</strong>.
              Includes functionalities like add, edit, delete, and stores tasks
              in
              <strong> Local Storage</strong> for persistence.
            </p>
          </div>

          {/* Calculator App */}
          <div className="project-card">
            <h3>💻 Calculator App</h3>
            <p>
              A functional and stylish calculator using{" "}
              <strong>JavaScript, HTML, and CSS</strong>. Supports basic
              arithmetic operations with a clean and responsive UI.
            </p>
          </div>
        </div>
      </section>

      {/* ================= Contact ================= */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <p>
            <FontAwesomeIcon icon={faPhone} /> 03168927326
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> abdulmoeezm37@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faGithub} />{" "}
            <a
              href="https://github.com/abdulmoeez-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/abdulmoeez-dev
            </a>
          </p>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="footer">
        <p>© 2025 MyPortfolio | Built by Abdul Moeez</p>
      </footer>
    </>
  );
}

export default App;
