import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <h3>Frontend Development</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>
        <div className="skill">
          <h3>Backend Development</h3>
          <p>PHP, Node.js, Express.js</p>
        </div>
        <div className="skill">
          <h3>Database Management</h3>
          <p>MySQL, MongoDB</p>
        </div>
        <div className="skill">
          <h3>Tools & Platforms</h3>
          <p>Git, GitHub, Bitbucket, Docker</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
