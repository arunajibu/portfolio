import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Experience/>
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
