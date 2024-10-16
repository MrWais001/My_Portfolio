import React, { useEffect, useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch portfolio items from back-end API
    fetch("http://localhost:5000/api/portfolio")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) =>
        console.error("Error fetching portfolio items:", error)
      );
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-details">
        <div className="section-heading text-center">
          <h2>Portfolio</h2>
        </div>
        <div className="container">
          <div className="portfolio-content">
            <div className="isotope">
              <div className="row">
                {projects.map((project) => (
                  <div className="col-sm-4" key={project.id}>
                    <div className="item">
                      <img
                        src="/images/portfolio1.avif"
                        alt="Portfolio Image 1"
                      />
                      <div className="isotope-overlay">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.category}{" "}
                          {/* Assuming you have a category field */}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
