import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ContactMe from './components/Contact';
import profileImage from './Images/Photo.png';
import ProjectDetail from './components/ProjectDetalis';
// Import icons - you'll need to install react-icons
// npm install react-icons
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='context-wrapper'>
        <Routes>
          <Route
            path="/"
            element={
              <div className="modern-landing-page">
                {/* Left Side - Profile Card */}
              <div className="profile-card-container">
                <div className="profile-card">
                  <div className="profile-image-container">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="profile-image"
                    />
                  </div>
                  <h2 className="profile-name">Anjali Narendra Vaghjiani</h2>
                  <p className="profile-title">AI & Data Science Engineer</p>
                  
                  <div className="social-icons">
                    <a href="https://github.com/AnjaliVaghjiani" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/anjalivaghjiani/" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <FaLinkedin />
                    </a>
                    <a href="mailto:your.email@example.com" className="social-icon">
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
                </div>
                
                {/* Right Side - Description */}
                <div className="intro-container">
                  <h1 className="intro-heading">Anjali Vaghjiani</h1>
                  <h3 className="intro-subheading">Artificial Intelligence & Data Science Engineer</h3>
                  
                  <p className="intro-text">
                    Computer Engineer currently pursuing a master's degree in 
                    Artificial Intelligence and Data Science at Politecnico di Torino. With a strong foundation in machine learning, 
                    data analysis, and software development, I create innovative solutions to complex problems.
                    I'm eager to explore, learn, and contribute to the ever-evolving landscape of intelligent technologies. 
                    Welcome to my digital space where I share my insights and projects.
                  </p>
                  
                  <div className="cta-buttons">
                    <Link to="/about-me" className="cta-button primary-button">
                      About Me
                    </Link>
                    <Link to="/projects" className="cta-button secondary-button">
                      View Projects
                    </Link>
                  </div>
                </div>
              </div>
            }
          />
          
          {/* Other Routes */}
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;