import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Gets the current year

  return (
    <footer id="footer-copyright" className="footer-copyright">
      <div className="container">
        <div className="hm-footer-copyright text-center">
          <p>&copy; {currentYear} OlaTech_Solutions.</p>
        </div>
      </div>

      <div id="scroll-Top">
        <div className="return-to-top">
          <i className="fa fa-angle-up" id="scroll-top"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
