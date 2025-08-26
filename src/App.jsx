import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Achievement from "./components/Achievement.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx"; // Create this component
import About from "./components/About.jsx"; // Create this component
import WorkExperience from "./components/WorkExperience.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About /> 
                <WorkExperience />
                <Skills />
                <Projects />
                <Achievement />
                <Contact />
              </>
            }
          />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          {/* Add more routes if needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
