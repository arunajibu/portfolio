import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Aruna Vasanth</h1>
        <p>Front-End Developer | Full-Stack Developer</p>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
