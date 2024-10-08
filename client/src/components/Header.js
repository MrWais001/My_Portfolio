import React from "react";
import logo from "../images/OLA TECH LOGO.jpg"; // Import the image

const Header = () => {
  return (
    <header className="top-area">
      <div className="header-area">
        {/* Start Navigation */}
        <nav className="navbar bootsnav no-background navbar-fixed">
          <div className="container">
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars"></i>
              </button>

              {/* Updated brand with imported image */}
              <a className="navbar-brand" href="index.html">
                <img
                  src={logo} // Use the imported image here
                  alt="Brand Logo"
                  style={{
                    height: "85px",
                    width: "85px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginTop: "-29px",
                  }}
                />
              </a>
            </div>
            {/* End Header Navigation */}

            {/* Collect the nav links, forms, and other content for toggling */}
            <div
              className="collapse navbar-collapse menu-ui-design"
              id="navbar-menu"
            >
              <ul
                className="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="smooth-menu active">
                  <a href="#home">Home</a>
                </li>
                <li className="smooth-menu">
                  <a href="#skills">Skills</a>
                </li>
                <li className="smooth-menu">
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li className="smooth-menu">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/*/.container */}
        </nav>
        {/* End Navigation */}
      </div>
      {/*/.header-area */}

      <div className="clearfix"></div>
    </header>
  );
};

export default Header;
