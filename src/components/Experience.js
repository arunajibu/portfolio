import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-container">
        <div className="experience-item">
          <h3>Software Engineer</h3>
          <p><strong>Company Name:</strong> Charter Communications (Contractor via Tandym Group)</p>
          <p><strong>Duration:</strong> 2.9 years</p>
          <p>
            <strong>Responsibilities:</strong> 
            <ul>
              <li> Developed an end-to-end lifecycle tracking system for infrastructure requests, integrating VMware
              vRA/vRO for automation and monitoring</li>
              <li>Built a self-service quote tool using PHP, HTML, CSS, jQuery, and JavaScript, enabling users to generate
              infrastructure budget estimates.</li>
              <li> Led UI modernization efforts, implementing responsive design and role-based content access/security.</li>
              <li>Created and integrated REST APIs in PHP for seamless VMware integration, streamlining automation
              workflows.</li>
              <li>Conducted regression testing, supported User Acceptance Testing (UAT), and participated in Disaster
              Recovery (DR) testing.</li>
              <li>Developed a React-based UI to enable the infrastructure team to track projected requests based on
              historical data.</li>
            </ul>
          </p>
        </div>
        <div className="experience-item">
          <h3>Wordpress Developer</h3>
          <p><strong>Company Name:</strong> Trainee | Family-Owned Business (Moksha Jewelry) | Bahrain</p>
          <p><strong>Duration:</strong> 6 months</p>
          <p>
            <strong>Responsibilities:</strong> 
            <ul>
              <li>Built an e-commerce platform using WordPress and WooCommerce to manage online sales and customer
              feedback.</li>
              <li>Developed custom order tracking and product customization features.</li>
              <li>Managed ongoing site maintenance, including security monitoring and plugin updates.</li>
              <li>New product launches and introducing offers and promotions.</li>
            </ul>
          </p>
        </div>
        <div className="experience-item">
          <h3>Software Engineer</h3>
          <p><strong>Company Name:</strong> Rutronix</p>
          <p><strong>Duration:</strong> 2.6 years</p>
          <p>
            <strong>Responsibilities:</strong> 
            <ul>
              <li>Designed and built web applications using PHP, HTML, CSS, and JavaScript to support 200+ branches and
              5000+ students.</li>
              <li>Managed live system usage during high traffic periods, ensuring stability and performance.</li>
              <li>Optimized database queries and performed regular maintenance on MySQL databases.</li>
              <li>Implemented automated batch processing to communicate results via email to students.</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
