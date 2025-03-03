import React from "react";

const projects = [
  {
    name: "Calculator App(strengthening React Basics)",
    description: "A simple calculator application where users can perform basic arithmetic operations.Also write tests using Jest and react testing library",
    github: "https://github.com/arunajibu/calculator.git",
    demo: "https://arunajibu.github.io/calculator/"
  },
 /* {
    name: "User Cards(Props and State Management)",
    description: "Display user profiles with name,age profession on cards, allowing users to edit their information",
    github: "",
    demo: "#"
  },*/
  {
    name: "Weather App(working with APIs)",
    description: "A web app that displays real-time weather data.",
    github: "https://github.com/arunajibu/weather-app.git",
    demo: "https://arunajibu.github.io/weather-app"
  },
  {
    name: "Task Manager",
    description: "A React app to manage tasks efficiently using Vite saved tasks are stored in local storage.",
    github: "https://github.com/arunajibu/task-manager-vite.git",
    demo: "https://arunajibu.github.io/task-manager-vite"
  },
  /*{
    name: "Registration Form(Forms and Validations)",
    description: "A registration form where users enter their name,email and password.The form validates inputs and displays error messages necessary.",
    github: "https://github.com/your-username/task-manager",
    demo: "#"
  },
  {
    name: "Blog App(Routing with react router)",
    description: "Blog APP - Routing with react router",
    github: "https://github.com/your-username/task-manager",
    demo: "#"
  },
  {
    name: "Note App(Performance Optimization)",
    description: "Note Taking APP - supports a large list of notes and includes search and filter features",
    github: "https://github.com/your-username/task-manager",
    demo: "#"
  },*/
  {
    name: "Image Gallery(Animations - To do)",
    description: "Gallery",
    github: "",
    demo: "#"
  },
  {
    name: "Shopping site(Redux or Redux Toolkit - To do)",
    description: "Shopping Cart for an e-commerce platform where users can add/remove items from their cart and view totals",
    github: "",
    demo: "#"
  },
  {
    name: "Clock App(Advanced Hooks - To do)",
    description: "Clock App",
    github: "",
    demo: "#"
  },
  {
    name: "Recipe App(Advanced Hooks- To do)",
    description: "Recipe App where users create recipes, save them to favorites and view instructions",
    github: "",
    demo: "#"
  },

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
            </a><br></br>
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
