import React from "react";

const projectsData = [
      {
    name: "Portfolio Website",
    description: "A modern portfolio built with React.",
    demo: "https://arunajibu.github.io/portfolio/#contact"
  },
      {
    name: "Precious Metal Price Tracker",
    description: "This project is a web-based application that fetches and displays live precious metal prices (Gold and Silver) using the Metals-API.",
    demo: "https://mokshaliveprice.netlify.app/"
  },
  {
    name: "Portfolio Demo",
    description: "This project involved converting a modern CV-style Figma design into a fully responsive landing page using HTML5, CSS3, and JavaScript. The design features a dark-themed user interface, a hero section with introductory content, and a top navigation bar with a functional language dropdown",
    demo: "https://ajv-portfolio.netlify.app/"
  },
    {
    name: "Calculator App(strengthening React Basics)",
    description: "A simple calculator application where users can perform basic arithmetic operations.Also write tests using Jest and react testing library",
    github: "https://github.com/arunajibu/calculator.git",
    demo: "https://arunajibu.github.io/calculator/"
  },
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
    {
    name: "Covid-19 Statistics Dashboard",
    description: "A react app using vite to learn useeffect.",
    github: "https://github.com/arunajibu/covid-statistics.git",
    demo: "https://arunajibu.github.io/covid-statistics"
  },
    {
    name: "Recipe App(Advanced Hooks- To do)",
    description: "Recipe App where users create recipes, save them to favorites and view instructions",
    github: "",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
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


/*import React from "react";

const projects = [
  {
    name: "Calculator App(strengthening React Basics)",
    description: "A simple calculator application where users can perform basic arithmetic operations.Also write tests using Jest and react testing library",
    github: "https://github.com/arunajibu/calculator.git",
    demo: "https://arunajibu.github.io/calculator/"
  },
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
  {
    name: "Covid-19 Statistics Dashboard",
    description: "A react app using vite to learn useeffect.",
    github: "https://github.com/arunajibu/covid-statistics.git",
    demo: "https://arunajibu.github.io/covid-statistics"
  },

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
*/