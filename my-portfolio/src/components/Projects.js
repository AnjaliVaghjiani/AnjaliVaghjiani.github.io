import React from 'react';
import '../css/Projects.css';
import { Link } from 'react-router-dom';
import LookAfter from '../Images/LookAfter.png';
import distrubutedLearning from '../Images/distributedLearning.png';
import MA from '../Images/MA.png';
import Monalisa from '../Images/Monalisa.png';
import sr from '../Images/Sr.png';
import Sr2 from '../Images/Sr2.png';

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-intro">Click on any project to view detailed information</p>
      
      <Link to="/project/distributed_learning" className="project-link">
      <div className="project-card">
        <div className="project-image-container">
        <img src={distrubutedLearning} alt="Distributed Learning" className="distributed-image" />
        </div>
        <h2>Optimization Techniques for Distributed Training</h2>
        <p>
        Advanced Machine Learning Course Project
        Designed and optimized large-batch training models using ADAM, SGDM, LARS, and LAMB. Implemented distributed
        learning techniques like SlowMo and LocalSGD with Python, PyTorch, NumPy, and torchvision.
        </p>
        <div className="project-actions">
          <a href="https://github.com/AnjaliVaghjiani/AML_Project5" 
              target="_blank" 
              rel="noopener noreferrer"
              >
            View Code
          </a>
        </div>
      </div>
      </Link>
    
      <Link to="/project/LookAfter" className="project-link">
        <div className="project-card">
          <div className="project-image-container">
            <img src={LookAfter} alt="Look After App" className="project-image" />
            <img src={Monalisa} alt="Look After App" className="project-image" />  
          </div>
          
          <h2>Look After</h2>
          <p>
            Developed a mobile app enabling visually impaired users to navigate museums and access artifact information.
            Built with JavaScript, React Native, and Google Speech API, with paper prototyping and high-fidelity design.
          </p>
          <div className="project-actions">
            <a
              href="https://github.com/AnjaliVaghjiani/Look-After"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      </Link>

      <Link to="/project/SymbolicRegression" className="project-link">
        <div className="project-card">
          <div className="project-image-container">
            <img src={Sr2} alt="Symbolic Regression" className="sr-image" />
          </div>
          <h2>Symbolic Regression</h2>
          <p>
            I have implemented this project using genetic algorithms to evolve and derive the mathematical formula that predicts the best fitness for the dataset provided.
          </p>
          <div className="project-actions">
            <a href="https://github.com/AnjaliVaghjiani/CI2024_project-work" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        </div>
      </Link>

      <Link to="/project/MaximumFLowAlgorithms" className="project-link">
        <div className="project-card">
          <div className="project-image-container">
            <img src={MA} alt="Maximum Flow Algorithms" className="ma-image" />
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
          </p>
          <div className="project-actions">
            <a href="https://github.com/AnjaliVaghjiani/Maximum-Flow-Algorithms" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        </div>
      </Link>

      {/* Add more project cards similarly */}
    </div>
  );
}

export default Projects;