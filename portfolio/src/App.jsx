import React, { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
// import Projects from "./components/projects";
import Contact from "./components/contact";
import { projects } from "./components/projectsData";
import ProjectList from "./components/projectList";
import ParagraphCard from "./components/paragraphCard";
import "./index.css";

function App() {
  const [currentView, setCurrentView] = useState("");

  const handleNavClick = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="background-cover">
      <div>
        <Navbar handleNavClick={handleNavClick} />
        {currentView === "home" && <Home />}
        {currentView === "about" && <About />}
        {currentView === "projects" && <ProjectList projects={projects} />}
        {currentView === "contact" && <Contact />}
      </div>
    </div>
  );
}
export default App;
