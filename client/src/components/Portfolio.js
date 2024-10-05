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
    <div>
      <h1>My Portfolio</h1>
      <div className="portfolio-container">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={`/images/${project.image}`} alt={project.title} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
