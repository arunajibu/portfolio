import React, { useState } from "react";
import "./Experience.css";

const experienceData = [
  {
    role: "Software Engineer",
    company: "Charter Communications (Contractor via Tandym Group)",
    duration: "2.9 years",
    responsibilities: [
      "Developed an end-to-end lifecycle tracking system for infrastructure requests, integrating VMware vRA/vRO for automation and monitoring.",
      "Built a self-service quote tool using PHP, HTML, CSS, jQuery, and JavaScript, enabling users to generate infrastructure budget estimates.",
      "Led UI modernization efforts, implementing responsive design and role-based content access/security.",
      "Created and integrated REST APIs in PHP for seamless VMware integration, streamlining automation workflows.",
      "Conducted regression testing, supported UAT, and participated in DR testing.",
      "Developed a React-based UI to enable the infrastructure team to track projected requests based on historical data."
    ]
  },
  {
    role: "WordPress Developer",
    company: "Trainee | Family-Owned Business (Moksha Jewelry) | Bahrain",
    duration: "6 months",
    responsibilities: [
      "Built an e-commerce platform using WordPress and WooCommerce to manage online sales and customer feedback.",
      "Developed custom order tracking and product customization features.",
      "Managed ongoing site maintenance, including security monitoring and plugin updates.",
      "Handled new product launches and promotional campaigns."
    ]
  },
  {
    role: "Software Engineer",
    company: "Rutronix",
    duration: "2.6 years",
    responsibilities: [
      "Designed and built web applications using PHP, HTML, CSS, and JavaScript to support 200+ branches and 5000+ students.",
      "Managed live system usage during high traffic periods, ensuring stability and performance.",
      "Optimized database queries and performed regular maintenance on MySQL databases.",
      "Implemented automated batch processing to communicate results via email to students."
    ]
  }
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-container">
        {experienceData.map((item, index) => (
          <div key={index} className="experience-item">
            <h3>{item.role}</h3>
            <p><strong>Company Name:</strong> {item.company}</p>
            <p><strong>Duration:</strong> {item.duration}</p>
            <p>
              <strong>Responsibilities:</strong>
              <ul className={expandedIndex === index ? "expanded" : "collapsed"}>
                {item.responsibilities.map((task, idx) => (
                  <li
                    key={idx}
                    style={{
                      animationDelay: expandedIndex === index ? `${idx * 0.1}s` : "0s"
                    }}
                    className={expandedIndex === index ? "fade-in" : ""}
                  >
                    {task}
                  </li>
                ))}
              </ul>
            </p>
            {item.responsibilities.length > 3 && (
              <button onClick={() => toggleExpand(index)}>
                {expandedIndex === index ? "Read Less" : "Read More"}{" "}
                <span className={`arrow ${expandedIndex === index ? "rotate" : ""}`}>▼</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
