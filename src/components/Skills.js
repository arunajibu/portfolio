import React from "react";

const skillsData = [
  { name: "React JS" },
  { name: "JavaScript" },
  { name: "PHP" },
  { name: "MySQL" },
  { name: "HTML & CSS" },
  { name: "WordPress" },
  { name: "Shopify" }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
