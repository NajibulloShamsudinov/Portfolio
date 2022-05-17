import React from "react";
import "./App.css";
import mastercard from "./assets/mastercard.jpg";
import MiniProject from "./assets/miniProject.png";
import dashboard from "./assets/dashboard.jpg";
import landing from "./assets/Screenshot_2.png";
import developer from "./assets/Tomasz.png";
import cv from "./assets/CV_Najibullo.pdf";
function App() {
  return (
    <>
      <nav id="navbar" class="nav">
        <ul class="nav-list">
          <li>
            <a href="#welcome-section">About</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section id="welcome-section" class="welcome-section">
        <h1>Hey I am Najibullo</h1>
        <p>a web developer</p>
      </section>

      <section id="projects" class="projects-section">
        <h2 class="projects-section-header">These are some of my projects</h2>

        <div class="projects-grid">
          <a
            href="https://najib-master-card-style.netlify.app/"
            target="_blank"
            class="project project-tile"
          >
            <img class="project-image" src={mastercard} alt="project" />
            <p class="project-title">
              <span class="code">&lt;</span>
              Master Card
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="https://codepen.io/freeCodeCamp/full/qRZeGZ"
            target="_blank"
            class="project project-tile"
          >
            <img class="project-image" src={MiniProject} alt="project" />
            <p class="project-title">
              <span class="code">&lt;</span>
              Mini Project
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="https://najib-dashboard.netlify.app/"
            target="_blank"
            class="project project-tile"
          >
            <img class="project-image" src={dashboard} alt="project" />
            <p class="project-title">
              <span class="code">&lt;</span>
              Dashboard
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="https://najib-example-landing-page.netlify.app/"
            target="_blank"
            class="project project-tile"
          >
            <img class="project-image" src={landing} alt="project" />
            <p class="project-title">
              <span class="code">&lt;</span>
              Landing Page
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="https://najib-about-one-developer.netlify.app/"
            target="_blank"
            class="project project-tile"
          >
            <img class="project-image" src={developer} alt="project" />
            <p class="project-title">
              <span class="code">&lt;</span>
              About One Developer
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
        </div>
      </section>

      <section id="contact" class="contact-section">
        <a class="cvDownload" href={cv} download>
          <button class="cvBtn" data-aos="fade-up" variant="contained">
            Download CV <i class="fa-solid fa-file-arrow-down"></i>
          </button>
        </a>
        <div class="contact-section-header">
          <h2>Let's work together...</h2>
        </div>
        <div class="contact-links">
          <a
            href="https://www.linkedin.com/in/najibulloh-shamsudinov-631b9b238/"
            target="_blank"
            class="btn contact-details"
          >
            <i class="fab fa-linkedin-in"> </i> Linkeden
          </a>
          <a
            id="profile-link"
            href="https://github.com/NajibulloShamsudinov?tab=repositories"
            target="_blank"
            class="btn contact-details"
          >
            <i class="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://twitter.com/freecodecamp"
            target="_blank"
            class="btn contact-details"
          ></a>
          <a href="shamsudinzoda.n9@gmal.com" class="btn contact-details">
            <i class="fas fa-at"></i> Send a mail
          </a>
          <a href="#phone" class="btn contact-details">
            <i class="fas fa-mobile-alt">+992907070745</i>
          </a>
        </div>
      </section>

      <footer>
        <p>&copy; Created by Shamsudinov Najibullo</p>
      </footer>
    </>
  );
}

export default App;
