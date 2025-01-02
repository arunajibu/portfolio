import React from "react";

const projects = [
  {
    name: "Weather App",
    description: "A web app that displays real-time weather data.",
    github: "https://github.com/your-username/weather-app",
    demo: "#"
  },
  {
    name: "Task Manager",
    description: "A React app to manage tasks efficiently.",
    github: "https://github.com/your-username/task-manager",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
