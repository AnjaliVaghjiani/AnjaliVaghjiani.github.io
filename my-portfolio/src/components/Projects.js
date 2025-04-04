// src/components/Projects.js
import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <Link to="/project/distributed_learning" className="project-link">
      <div className="project-card">
        <div className="project-image-container">
        <img src="/Images/distributedLearning.png" alt="Disrtibuted Learning" className="distributed-image" />
        </div>
        <h2>Optimization Techniques for Distributed Training </h2>
        <p>
        Advanced Machine Learning Course Project
        Designed and optimized large-batch training models using ADAM, SGDM, LARS, and LAMB. Implemented distributed
        learning techniques like SlowMo and LocalSGD with Python, PyTorch, NumPy, and torchvision.Designed and optimized
        large-batch training models using ADAM, SGDM, LARS, and LAMB. Implemented distributed learning techniques like
        SlowMo and LocalSGD with Python, NumPy, and torchvision.
        </p>
        <a href="https://github.com/AnjaliVaghjiani/AML_Project5" 
            target="_blank" 
            rel="noopener noreferrer"
            >
          View Code
        </a>
      </div>
      </Link>
    
      <Link to="/project/LookAfter" className="project-link">
  <div className="project-card">
    {/* Left - Image */}
    <div className="project-image-container">
      <img src="/Images/LookAfter.png" alt="Look After App" className="project-image" />
      <img src="/Images/Monalisa.png" alt="Look After App" className="project-image" />  
    </div>

    {/* Right - Description */}
    
      <h2>Look After</h2>
      <p>
        Developed a mobile app enabling visually impaired users to navigate museums and access artifact information.
        Built with JavaScript, React Native, and Google Speech API, with paper prototyping and high-fidelity design.
      </p>
      <a
        href="https://github.com/AnjaliVaghjiani/Look-After"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Code
      </a>
    
  </div>
</Link>


      <Link to="/project/SymbolicRegression" className="project-link">
      <div className="project-card">
      <div className="project-image-container">
        <img src="/Images/Sr2.png" alt="Symbolic Regression" className="sr-image" />
        </div>
        <h2>Symbolic Regression</h2>
        <p>
            I have implemented this project using genetic algorithms to evolve and derive the mathematical formula that predicts the best fitness for the dataset provided.
        </p>
        <a href="https://github.com/AnjaliVaghjiani/CI2024_project-work" target="_blank" rel="noopener noreferrer">
          View Code
        </a>
      </div>
      </Link>

      <Link to="/project/MaximumFLowAlgorithms" className="project-link">
      <div className="project-card">
      <div className="project-image-container">
        <img src="/Images/MA.png" alt="Symbolic Regression" className="ma-image" />
        </div>
        <h2>Maximum Flow Algorithms</h2>
        <p>
      This project implements three key algorithms to solve the Maximum Flow Problem in a flow network:
    </p>
    <ul className="project-bullets">
      <li>Edmonds-Karp Algorithm</li>
      <li>Dinic's Algorithm</li>
      <li>Push-Relabel Algorithm</li>
    </ul>
    <p>
      Each algorithm has both sequential and parallel implementations using OpenMP for optimization.
      Includes a graph generator for testing without custom input.
    </p>
        <a href="https://github.com/AnjaliVaghjiani/Maximum-Flow-Algorithms" target="_blank" rel="noopener noreferrer">
          View Code
        </a>
      </div>
      </Link>

      {/* Add more project cards similarly */}
    </div>
  );
}

export default Projects;
