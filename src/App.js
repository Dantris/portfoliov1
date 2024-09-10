import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutPage />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
