import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom for navigation

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Link to Home page */}
        </li>
        <li>
          <Link to="/about-me">About Me</Link> {/* Link to About Me page */}
        </li>
        <li>
          <Link to="/projects">Projects</Link> {/* Link to Projects page */}
        </li>
        <li>
          <Link to="/contact">Contact Me</Link> {/* Link to Contact Me page */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
