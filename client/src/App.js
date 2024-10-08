import React from "react";
import { Link } from "react-scroll";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // Adjust the path if necessary

function App() {
  return (
    <div className="App">
      {/* Replace the existing header and nav with the Header component */}
      <Header />

      {/* Sections */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills /> {/* Add the Skills component here */}
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
