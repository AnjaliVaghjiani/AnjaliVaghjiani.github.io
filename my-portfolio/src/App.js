import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';  // Import the AboutMe component
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Main Landing Page Route */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="main-page">
                <header className="App-header">
                  <div className="landing-container">
                    {/* Left Side - Image */}
                    <div className="image-container">
                      <img
                        src="/Images/Photo.png"  // Replace with your actual image file name
                        alt="Profile"
                        className="profile-image"
                      />
                    </div>

                    {/* Right Side - Description */}
                    <div className="description-container">
                      <h1>Anjali Narendra Vaghjiani</h1>
                      <p className="description">
                        I am a passionate Computer Engineer currently pursuing a master's degree in Artificial Intelligence and Data Science...
                      </p>
                      {/* Link Button to About Me Page */}
                      <Link to="/about-me">
                        <button className="know-more-btn">Know More About Me</button>
                      </Link>
                    </div>
                  </div>
                </header>
              </div>
            }
          />

          {/* About Me Page Route */}
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
