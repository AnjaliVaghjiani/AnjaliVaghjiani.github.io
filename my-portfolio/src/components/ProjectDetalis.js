import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/ProjectDetails.css';

// Import your project images
import LookAfter from '../Images/LookAfter.png';
import distrubutedLearning from '../Images/distributedLearning.png';
import MA from '../Images/MA.png';
import Monalisa from '../Images/Monalisa.png';
import sr from '../Images/Sr.png';
import Sr2 from '../Images/Sr2.png';

// Project data object
const projectsData = {
  distributed_learning: {
    title: "Optimization Techniques for Distributed Training",
    subtitle: "Advanced Machine Learning Course Project",
    images: [distrubutedLearning],
    description: `
      This project focuses on optimizing large-batch training models using various optimization algorithms such as ADAM, SGDM, LARS, and LAMB. The goal was to implement and compare different distributed learning techniques to improve training efficiency and performance.
      
      ## Project Objectives
      - Implement large-batch training optimization techniques
      - Compare performance between ADAM, SGDM, LARS, and LAMB algorithms
      - Apply distributed learning approaches like SlowMo and LocalSGD
      - Evaluate scaling properties of different algorithms
      
      ## Technical Implementation
      We used PyTorch as our main framework, along with NumPy and torchvision for data processing. The implementation involved:
      
      1. Setting up a distributed training environment
      2. Implementing various optimization algorithms
      3. Conducting experiments with different batch sizes
      4. Analyzing convergence rates and final model accuracy
      
      ## Results
      Our experiments demonstrated that specialized optimizers like LARS and LAMB significantly outperformed traditional methods when scaling to large batch sizes. The SlowMo technique proved particularly effective at maintaining convergence stability across distributed nodes.
      
      ## Skills Applied
      - Distributed Systems
      - Machine Learning Optimization
      - PyTorch
      - Data Analysis
      - Performance Benchmarking
    `,
    skills: ["Python", "PyTorch", "NumPy", "Distributed Computing", "Machine Learning"],
    github: "https://github.com/AnjaliVaghjiani/AML_Project5"
  },
  LookAfter: {
    title: "Look After",
    subtitle: "Accessibility App for the Visually Impaired",
    images: [LookAfter, Monalisa],
    description: `
      Look After is a mobile application designed to empower visually impaired users to independently navigate museums and access information about artifacts. The app uses a combination of audio guidance, speech recognition, and accessibility features to create an inclusive museum experience.
      
      ## Problem Statement
      Museums are predominantly visual spaces, making them challenging for people with visual impairments to enjoy independently. Traditional solutions like braille descriptions or audio guides often provide limited information and don't allow for dynamic exploration.
      
      ## Solution
      Look After transforms the museum experience by:
      
      1. Providing real-time navigation assistance within museum spaces
      2. Offering detailed audio descriptions of artifacts when approached
      3. Allowing users to ask questions about exhibits using voice commands
      4. Creating a more inclusive and independent cultural experience
      
      ## Technical Implementation
      The application was built using:
      - React Native for cross-platform functionality
      - Google Speech API for voice recognition and text-to-speech
      - Bluetooth beacons for indoor positioning
      - Custom accessibility-focused UI/UX design
      
      ## Design Process
      Our development process included:
      1. Initial research with visually impaired participants
      2. Paper prototyping and usability testing
      3. Iterative design based on feedback
      4. High-fidelity prototype development
      5. Final user testing in museum environments
      
      ## Impact
      Early testing showed that users with visual impairments were able to navigate test environments with 85% more independence and reported a significantly enhanced experience compared to traditional museum visits.
    `,
    skills: ["JavaScript", "React Native", "Google Speech API", "Accessibility Design", "UI/UX"],
    github: "https://github.com/AnjaliVaghjiani/Look-After"
  },
  SymbolicRegression: {
    title: "Symbolic Regression",
    subtitle: "Genetic Algorithm Implementation",
    images: [Sr2, sr],
    description: `
      This project implements symbolic regression using genetic algorithms to discover mathematical formulas that best fit provided datasets. Instead of predetermining the structure of the equation, the algorithm evolves mathematical expressions to find the optimal formula that describes the relationship between input and output variables.
      
      ## Project Overview
      Symbolic regression is a type of regression analysis that searches the space of mathematical expressions to find the model that best fits a given dataset. Unlike traditional regression techniques that fit parameters to a predefined model, symbolic regression simultaneously searches for both the model structure and parameters.
      
      ## Implementation Details
      The implementation uses genetic programming, a type of evolutionary algorithm, with the following components:
      
      1. **Expression Trees**: Mathematical formulas are represented as tree structures where internal nodes are operators (addition, subtraction, multiplication, etc.) and leaf nodes are variables or constants.
      
      2. **Population Management**: A population of expression trees is maintained and evolved over generations.
      
      3. **Genetic Operators**:
         - Crossover: Swapping subtrees between two parent expressions
         - Mutation: Randomly altering parts of an expression tree
         - Selection: Tournament selection to choose parents for the next generation
      
      4. **Fitness Evaluation**: Expressions are evaluated based on how well they fit the provided dataset, using metrics like mean squared error.
      
      ## Results
      The algorithm successfully derived mathematical formulas for several test datasets with high accuracy. For complex datasets, the evolved expressions often provided insights into the underlying relationships between variables that might not be obvious with traditional statistical approaches.
      
      ## Applications
      This technique can be applied to:
      - Scientific discovery
      - Data analysis and feature engineering
      - System identification
      - Time series forecasting
    `,
    skills: ["Genetic Algorithms", "Evolutionary Computation", "Python", "Data Science", "Machine Learning"],
    github: "https://github.com/AnjaliVaghjiani/CI2024_project-work"
  },
  MaximumFLowAlgorithms: {
    title: "Maximum Flow Algorithms",
    subtitle: "Parallel Implementation and Performance Analysis",
    images: [MA],
    description: `
      This project implements and compares three fundamental algorithms for solving the Maximum Flow Problem in network flow theory: Edmonds-Karp, Dinic's, and Push-Relabel algorithms. Each algorithm is implemented in both sequential and parallel versions using OpenMP to optimize performance.
      
      ## The Maximum Flow Problem
      The maximum flow problem involves finding the maximum amount of flow that can be sent from a source node to a sink node in a flow network, while respecting the capacity constraints of each edge.
      
      ## Implemented Algorithms
      
      ### 1. Edmonds-Karp Algorithm
      An implementation of the Ford-Fulkerson method that uses breadth-first search to find augmenting paths. This guarantees a polynomial running time of O(VE²), where V is the number of vertices and E is the number of edges.
      
      ### 2. Dinic's Algorithm
      An improved approach that uses the concept of level graphs and blocking flows to achieve a time complexity of O(V²E).
      
      ### 3. Push-Relabel Algorithm
      A different approach that maintains a preflow instead of a valid flow, and uses local operations to move flow towards the sink. It achieves O(V³) complexity and often performs better in practice for dense graphs.
      
      ## Parallel Implementation
      Each algorithm was parallelized using OpenMP:
      - For BFS in Edmonds-Karp and Dinic's: parallel frontier exploration
      - For Push-Relabel: parallel discharge operations
      
      ## Performance Analysis
      Extensive testing was conducted on various graph types:
      - Random networks
      - Grid networks
      - Scale-free networks
      
      The parallel implementations achieved significant speedups on multi-core systems, with Push-Relabel showing the best parallel efficiency for dense graphs.
      
      ## Graph Generator
      The project includes a graph generator tool that can create flow networks with configurable parameters such as:
      - Number of vertices
      - Edge density
      - Capacity distribution
      
      This allows for systematic testing without requiring manual input.
    `,
    skills: ["C++", "OpenMP", "Parallel Computing", "Graph Algorithms", "Algorithm Optimization"],
    github: "https://github.com/AnjaliVaghjiani/Maximum-Flow-Algorithms"
  }
};

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="project-detail-container">
        <h1>Project Not Found</h1>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="back-button">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <Link to="/projects" className="back-button">
        ← Back to Projects
      </Link>
      
      <h1>{project.title}</h1>
      <h2>{project.subtitle}</h2>
      
      <div className="project-detail-images">
        {project.images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`${project.title} - Image ${index + 1}`} 
            className="detail-image"
          />
        ))}
      </div>
      
      <div className="project-description">
        {project.description.split('\n\n').map((paragraph, index) => {
          if (paragraph.startsWith('## ')) {
            return <h3 key={index}>{paragraph.substring(3)}</h3>;
          } else if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
            const items = paragraph.includes('1. ') ? 
              paragraph.split(/\d+\.\s/).filter(Boolean) : 
              paragraph.split('- ').filter(Boolean);
            
            return (
              <ul key={index} className="project-list">
                {items.map((item, i) => <li key={i}>{item.trim()}</li>)}
              </ul>
            );
          } else {
            return <p key={index}>{paragraph}</p>;
          }
        })}
      </div>
      
      <div className="project-skills">
        <h3>Skills & Technologies</h3>
        <div className="skills-tags">
          {project.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
      
      <div className="project-links">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="github-link"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectDetail;