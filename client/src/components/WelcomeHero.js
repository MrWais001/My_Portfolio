import React from "react";

const WelcomeHero = ({ name, profession, resumeLink }) => {
  return (
    <section id="welcome-hero" className="welcome-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="header-text">
              <h2>
                Hi <span>,</span> I am <br /> {name}. <br />
              </h2>
              <p>{profession}</p>
              <a href={resumeLink} download aria-label="Download my resume">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

WelcomeHero.defaultProps = {
  name: "Abdulgafar Ridwan",
  profession: "Fullstack Developer",
  resumeLink: "assets/download/browney.txt",
};

export default WelcomeHero;
