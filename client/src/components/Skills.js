import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skill-content">
        <div className="section-heading text-center">
          <h2>Skills</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="single-skill-content">
                <div className="barWrapper">
                  <span className="progressText">Adobe Photoshop</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={10}
                        aria-valuemax={100}
                        style={{ width: "90%" }} // Set the width for the progress bar
                      ></div>
                    </div>
                    <h3>90%</h3>
                  </div>
                </div>

                <div className="barWrapper">
                  <span className="progressText">Adobe Illustrator</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={10}
                        aria-valuemax={100}
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <h3>85%</h3>
                  </div>
                </div>

                <div className="barWrapper">
                  <span className="progressText">Adobe After Effects</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={97}
                        aria-valuemin={10}
                        aria-valuemax={100}
                        style={{ width: "97%" }}
                      ></div>
                    </div>
                    <h3>97%</h3>
                  </div>
                </div>

                <div className="barWrapper">
                  <span className="progressText">Sketch</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={10}
                        aria-valuemax={100}
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <h3>90%</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="single-skill-content">
                <div className="barWrapper">
                  <span className="progressText">HTML 5</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={10}
                        aria-valuemax={100}
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <h3>90%</h3>
                  </div>
                </div>

                <div className="barWrapper">
                  <span className="progressText">CSS 3 Animation</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={10}
                        aria-valuemax={100}
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <h3>85%</h3>
                  </div>
                </div>

                <div className="barWrapper">
                  <span className="progressText">Communication</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={97}
                        aria-valuemin={10}
                        aria-valuemax={100}
                        style={{ width: "97%" }}
                      ></div>
                    </div>
                    <h3>97%</h3>
                  </div>
                </div>

                <div className="barWrapper">
                  <span className="progressText">Creativity</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={10}
                        aria-valuemax={100}
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <h3>90%</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.skill-content */}
    </section>
  );
};

export default Skills;
