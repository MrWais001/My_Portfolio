import React from "react";
import "../App.css";
import "font-awesome/css/font-awesome.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading text-center">
          <h2>Contact Me</h2>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          <div className="row">
            {/* Contact Form */}
            <div className="col-md-6">
              <div className="single-contact-box">
                <div className="contact-form">
                  <form>
                    <div className="row">
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name*"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email*"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            rows="8"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="single-contact-btn">
                          <button className="contact-btn" type="submit">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-md-6">
              <div className="single-contact-box">
                <div className="contact-address">
                  <div className="contact-add-head">
                    <h3>Browny Star</h3>
                    <p>UI/UX Designer</p>
                  </div>
                  <div className="contact-add-info">
                    <div className="single-contact-add-info">
                      <h3>Phone</h3>
                      <p>987-123-6547</p>
                    </div>
                    <div className="single-contact-add-info">
                      <h3>Email</h3>
                      <p>browny@info.com</p>
                    </div>
                    <div className="single-contact-add-info">
                      <h3>Website</h3>
                      <p>www.brownsine.com</p>
                    </div>
                  </div>
                </div>
                <div className="hm-foot-icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:youremail@gmail.com">
                        <i className="fa fa-envelope"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
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

export default Contact;
