import React from "react";
import "../App.css"; // Assuming your styles are here
import "font-awesome/css/font-awesome.css";
import profileImage from "../images/about/profile_image.jpg"; // Correct path

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-heading text-center">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="row">
            <div className="col-sm-6">
              <div className="single-about-txt">
                <h3>
                  Hello! I’m Abdulgafar Ridwan, a passionate Full-Stack
                  Developer from Nigeria. With a strong foundation in both
                  front-end and back-end technologies, I thrive on building
                  dynamic and responsive web applications. I enjoy turning ideas
                  into reality by writing clean and efficient code.
                </h3>
                <p>
                  <div>
                    <p>
                      I have a strong interest in technology and design, which
                      has driven me to hone my skills in both front-end and
                      back-end development. I believe in creating solutions that
                      not only function well but also provide a delightful user
                      experience. In my free time, I enjoy exploring new
                      technologies and staying updated on industry trends. I am
                      constantly seeking opportunities to improve my skills and
                      collaborate with other talented individuals.
                    </p>
                    <p> skill set includes:</p>
                    <ul>
                      <li>
                        <strong>Front-End:</strong>
                        <ul>
                          <li>Proficient in HTML, CSS, and JavaScript</li>
                          <li>
                            Experience with frameworks like React and Angular
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Back-End:</strong>
                        <ul>
                          <li>Skilled in Node.js and Express</li>
                          <li>
                            Working with databases such as MongoDB and SQL
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Tools & Technologies:</strong>
                        <ul>
                          <li>Familiar with Git, Docker, and various APIs</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </p>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5">
              <div className="single-about-img">
                <img src={profileImage} alt="Profile" />
                <div className="about-list-icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:youremail@gmail.com">
                        <i className="fa fa-envelope"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
