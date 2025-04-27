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
import homepage from '../Images/HomePage.png';
import gamepage from '../Images/GamePage.png';
// Project data object
const projectsData = {
  distributed_learning: {
    title: "Optimization Techniques for Distributed Training",
    subtitle: "Advanced Machine Learning Course Project",
    images: [distrubutedLearning],
    introduction: `Deep learning has revolutionized AI through increasingly complex models that deliver breakthrough performance.\n
    However, these advancements come with significant challenges as state-of-the-art architectures particularly in natural language processing now require billions or even trillions of parameters.\n
    Distributed training is essential for scaling modern deep-learning models to larger datasets and architectures.\n 
    This massive scale creates real-world obstacles:\n
    
    1) Prohibitively long training times. 
    2) Inability to run models on single GPUs or standard devices. 
    3) Diminishing returns from hardware improvements alone.\n
    
    To address these limitations, my project focused on distributed learning approaches for neural networks, specifically exploring data-parallel methods where different chunks of data are processed simultaneously across multiple accelerators.\n
    The project was particularly timely as centralized training solutions increasingly fail to meet modern applications' needs. Today's real-world data is both heterogeneous and decentralized, requiring new paradigms that can efficiently leverage computational resources while maintaining model performance.\n
    Through this project, we investigated how different distributed learning techniques balance the trade-offs between computational efficiency, communication overhead, and model accuracy essential knowledge for deploying deep learning at scale in production environments.\n
    We also did a little personal contribution part rather than just testing existing models which was more about adjusting the dynamic steps in LocalSGD, by adapting J(local steps) based on the gradient magnitude and variance, our main aim was to strike a balance between convergence speed and communication efficiency.\n
    This approach ensures that the system adjusts to the changing dynamics of the training process and accounts for heterogeneity across workers.\n`,
    goal: `The main aim of this project was to understand and optimize distributed training strategies using different optimizers determining its computational cost with model accuracy.
    
    Implementation: This project was implemented using Python.
    
    Model architecture: The project was implemented on LeNet5 architecture model using CIFAR100 dataset.`,
    experiment: `1) We started by running centralized training to find the best hyperparameters for AdamW and SGDM optimizers.
    2) Then we used the best hyperparameters found to handle larger batch sizes.
    3) And we also tested two different optimizers LARS and LAMB testing the accuracy of larger batch sizes.
    4) Later on we experimented another approach which is LocalSGD and SlowMo experimenting the output of different number of workers with local iteration to find the best combinations for distributed training.`,
    results: `1) From the experiment we concluded that LAMB achieved best result with large batch sizes up to 8K with accuracy 43.70%
    2) From the experiment of LocalSGD we concluded that as the number of local updates increases, communication time decreases but computation time increases due to overhead of synchronization. So the best combination we found in terms of accuracy was when K(no of workers)=2 and J(local updates)=4 .
    3) In the experiment alpha(a) is a scaling factor that controls the sensitivity of J to the gradient statistic. So the result was as alpha increases, the computation time slightly increases leading to more local computation per communication round. Higher α reduces communication frequency but increases the local computation burden.`,
    paper:`For further details, adding a link to the research paper.
    <a href="/AML_Project5.pdf" target="_blank" rel="noopener noreferrer" style="color: #78FABC;">View Full Research Paper</a>`,
    skills: ["Python", "PyTorch", "NumPy", "Distributed Computing", "Machine Learning"],
    github: "https://github.com/AnjaliVaghjiani/AML_Project5"
  },
  LookAfter: {
    title: "Look After",
    subtitle: "Accessibility App for the Visually Impaired",
    images: [LookAfter, Monalisa],
    introduction: `Look After is a mobile application designed to empower visually impaired users to independently navigate museums and access information about artifacts. 
    The app uses a combination of audio guidance, speech recognition, and personalized chat features to create an inclusive museum experience.`,
    problem: `Museums and exhibitions are often not designed with visually impaired individuals in mind, making it difficult for them to explore these spaces independently. 
    Most museums do not offer accessible tools or guided assistance for people with visual impairments. Additionally, some individuals may feel hesitant to ask for help or may find it hard to locate assistance when needed. 
    In many cases, the information available about artifacts is limited and not presented in an engaging or conversational manner.`,
    solution: `Look After transforms the museum experience by:\n
    
    1) Providing real-time navigation assistance within museum spaces to find path to reach certain artwork within the area.
    2) Offering detailed audio and textual descriptions of artifacts when approached. 
    3) Allowing users to ask questions about exhibits using voice commands and text input.
    4) Creating a more inclusive and independent cultural experience.`,
    implementation: `The application was built using:\n
    1) React Native (JavaScript): The core framework used for building the cross-platform mobile application.
    2) Expo: Utilized for launching and testing the app on mobile devices efficiently.
    3) Google Speech-to-Text API: Integrated to enable voice recognition and convert speech into text, since Expo Go does not support native speech-to-text functionality.
    4) Custom UX/UI Design: Tailored specifically for ease of use by individuals with visual impairments, ensuring accessibility and simplicity.
    5) Text-to-Speech (expo-speech): Used to provide spoken feedback by converting text into speech.
    6) Camera (expo-camera): Components like Camera, CameraView, and CameraType are used for accessing and controlling the device’s camera.
    7) Navigation: Implemented using useFocusEffect and useNavigation from @react-navigation/native for smooth screen transitions and focus management.
    8) React Hooks: Including useState, useCallback, useEffect, and useContext for managing state, side effects, and context throughout the app.
    9) UI Components: Core React Native components such as StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Alert, Animated, Vibration, and SafeAreaView are used to create responsive, animated, and accessible user interfaces.
    10) AsyncStorage: Used to store data persistently on the device, such as saving previous chat messages or user preferences across sessions.`,
    process: `Our development process included:\n
    1) Initial Research: We conducted interviews with visually impaired individuals to understand their daily challenges, particularly in navigating and exploring public spaces like museums.
    2) Ideation: Brainstormed ideas and identified core problems and potential solutions based on the insights gathered. 
    3) Concept Finalization: Selected the most impactful idea and determined the specific needs and requirements to address the problem.
    4) Modality Selection & Paper Prototyping: Chose two interaction modalities and created initial paper prototypes to visualize and test the user flow.
    5) Prototype Development: Developed low, medium, and high-fidelity prototypes to gradually refine the user experience and interface design.
    3) Iterative Design: Continuously improved the application based on user feedback collected throughout the development cycle.
    4) High-Fidelity Prototype: Built a fully functional high-fidelity version of the app with all key features integrated.
    5) User Testing: Simulated a museum environment and conducted final testing sessions with visually impaired users to validate the application’s usability and accessibility.`,
    impact: `Early testing showed that users with visual impairments were able to navigate test environments with 85% more independence and reported a significantly enhanced experience compared to traditional museum visits.`,
    screenshots:[],
    skills: ["JavaScript", "React Native", "Google Speech API", "Accessibility Design", "UI/UX"],
    github: "https://github.com/AnjaliVaghjiani/Look-After",
    // Keeping the legacy description for backward compatibility
  },
  MemeGame:{
    title: "Meme Game",
    subtitle: "Web Application Project",
    images: [homepage],
    introduction: `This project was developed by me as a part of the university coursework, I designed and developed a web application called Meme Game.
    Inspired by the popular board game called "What Do You Meme?", the project challanged me to build a fully functional single-player version of the game using React for the front end, Node.js and Express for the backend, and SQLite for the database.
    The goal was to create an engaging, time-limited game where users guess the best-fitting captions for a randomly presented meme image.`,
    overview:`Meme Game is a web-based single page application (SPA) where users either anonymous or loggedin/registed, can play rounds of meme caption matching game.
    The game workflow includes: \n
    1) Presenting a random meme image with 7 possible captions.
    2) The player must select one of the two correct captions with 30 seconds to earn points.
    3) Registed users play full games with 3 rounds, track their past scores, and view game histories.
    4) Anonoymous users are limited to single-round games without score history.
    
    All the server communication is handled through a structured set of RESTful APIs, and user authentication is managed via Passport.js using session cookies.`,
    implementation:`\n
    Front-End(Client)\n
    1) React 18 with Vite as the build tool.
    2) Organized into multiple reusable components.
    3) Used React Router for client-side routing.
    4) Managed global game state using React Context API and Hooks.
    5) Styled primarily with React-Bootstrap for rapid prototyping and clean UI component.
    6) Strict Mode enabled for deveopment to catch potential problems early.
    7) Handled CORS to allow communication with the seperate backend server.
    
    \n
    
    Back-End (Server)\n
    1) Built using Node.js and Express framework
    2) Implemented RESTful APIs for all client-server communications.
    3) Managed authentication with Passport.js and secure sessions.
    4) Applied express-validation for input validation and security.
    5) Used nodeman for efficient server development and live-reloading.
    6) Pre-loaded the SQLite database with:\n
     - 10 meme iamges\n
     - 50 different captions\n
     - 2 registed users (with salted and encrypted passwords)

    `,
    applications:`The project is develpoed using JavaScript (client and server side)\n
    Libraries and Framework used are:\n
     - React, React Router DOM, React Bootstrap, Day.js(for time handling)\n
     - Axios, Express, Passport.js\n
     - SQLite3, Express-Session, CORS, Bcrypt\n
     
    Development Tools:\n
     - Vite, Nodemon, VSCode, Git & GitHub`,
    screenshots: [gamepage],
    skills: ["React", "Node.js", "Express", "SQLite", "REST APIs", "Passport.js", "Authentication", "Context API", "React Router", "JavaScript", "Web Development"],
    github: "https://github.com/AnjaliVaghjiani/Meme-Game.git", 
  },
  SymbolicRegression: {
    title: "Symbolic Regression",
    subtitle: "Genetic Algorithm Implementation",
    images: [Sr2, sr],
    introduction: `This project implements symbolic regression using genetic algorithms to discover mathematical formulas that best fit provided datasets. Instead of predetermining the structure of the equation, the algorithm evolves mathematical expressions to find the optimal formula that describes the relationship between input and output variables.`,
    overview: `Symbolic regression is a type of regression analysis that searches the space of mathematical expressions to find the model that best fits a given dataset. Unlike traditional regression techniques that fit parameters to a predefined model, symbolic regression simultaneously searches for both the model structure and parameters.`,
    implementation: `The implementation uses genetic programming, a type of evolutionary algorithm, with the following components:

    1) Expression Trees: Mathematical formulas are represented as tree structures where internal nodes are operators (addition, subtraction, multiplication, etc.) and leaf nodes are variables or constants.
    
    2) Population Management: A population of expression trees is maintained and evolved over generations.
    
    3) Genetic Operators:\n
       - Crossover: Swapping subtrees between two parent expressions.\n
       - Mutation: Randomly altering parts of an expression tree.\n
       - Selection: Tournament selection to choose parents for the next generation.\n
    
    4) Fitness Evaluation: Expressions are evaluated based on how well they fit the provided dataset, using metrics like mean squared error.`,
    results: `The algorithm successfully derived mathematical formulas for several test datasets with high accuracy. For complex datasets, the evolved expressions often provided insights into the underlying relationships between variables that might not be obvious with traditional statistical approaches.`,
    applications: `This technique can be applied to:
    - Scientific discovery
    - Data analysis and feature engineering
    - System identification
    - Time series forecasting`,
    skills: ["Genetic Algorithms", "Evolutionary Computation", "Python", "Data Science", "Machine Learning"],
    github: "https://github.com/AnjaliVaghjiani/CI2024_project-work",
    // Keeping the legacy description for backward compatibility
    
  },
  MaximumFLowAlgorithms: {
    title: "Maximum Flow Algorithms",
    subtitle: "Parallel Implementation and Performance Analysis",
    images: [MA],
    introduction: `This project implements and compares three fundamental algorithms for solving the Maximum Flow Problem in network flow theory: Edmonds-Karp, Dinic's, and Push-Relabel algorithms. Each algorithm is implemented in both sequential and parallel versions using OpenMP to optimize performance.`,
    problem: `The maximum flow problem involves finding the maximum amount of flow that can be sent from a source node to a sink node in a flow network, while respecting the capacity constraints of each edge.`,
    algorithms: `
    1) Edmonds-Karp Algorithm: An implementation of the Ford-Fulkerson method that uses breadth-first search to find augmenting paths. This guarantees a polynomial running time of O(VE²), where V is the number of vertices and E is the number of edges.
    2) Dinic's Algorithm: An improved approach that uses the concept of level graphs and blocking flows to achieve a time complexity of O(V²E).
    3) Push-Relabel Algorithm: A different approach that maintains a preflow instead of a valid flow, and uses local operations to move flow towards the sink. It achieves O(V³) complexity and often performs better in practice for dense graphs.`,
    graph_genration:`To support testing, we first developed a graph generator module. This allows for systematic testing without requiring manual input.\n
        - Define the number of vertices and edges\n
        - Adjust the connectivity complexity\n
        - Control capacity distribution`,
    parallelization: `Each algorithm was parallelized using OpenMP:\n
    - For BFS in Edmonds-Karp and Dinic's: parallel frontier exploration\n
    - For Push-Relabel: parallel discharge operations\n`,
    analysis: `Extensive testing was conducted on various graph types:\n
    - Random networks\n
    - Grid networks\n
    - Scale-free networks\n
    
    The parallel implementations achieved significant speedups on multi-core systems, with Push-Relabel showing the best parallel efficiency for dense graphs.`,
    
    skills: ["C++", "OpenMP", "Parallel Computing", "Graph Algorithms", "Algorithm Optimization"],
    github: "https://github.com/AnjaliVaghjiani/Maximum-Flow-Algorithms",
    // Keeping the legacy description for backward compatibility
    
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

  // Helper function to process and render content
  const processContent = (content, isHtml = false) => {
    if (!content) return null;
  
    // First, split by paragraph
    const paragraphs = content.split('\n\n').map(p => p.trim());
  
    return paragraphs.map((paragraph, index) => {
      // Check if it's a numbered list (contains pattern like "1) " or "1. ")
      if (paragraph.match(/^\d+[\)\.]\s/m) || paragraph.includes('\n1)') || paragraph.includes('\n1. ')) {
        // Split based on numbers followed by ) or . and space
        const items = paragraph.split(/\d+[\)\.]\s/).filter(Boolean);
  
        return (
          <ol key={index} className="project-list numbered-list">
            {items.map((item, i) => {
              // Clean up the item by trimming extra spaces
              const cleanItem = item.trim();
              return <li key={i}>{cleanItem}</li>;
            })}
          </ol>
        );
      }
      // Check if it's a bullet list
      else if (paragraph.startsWith('- ') || paragraph.includes('\n- ')) {
        let items;
        if (paragraph.includes('\n')) {
          // Each line that starts with "- " is an item
          items = paragraph.split('\n').filter(line => line.trim().startsWith('- '));
        } else {
          items = paragraph.split('- ').filter(Boolean);
        }
  
        return (
          <ul key={index} className="project-list bullet-list">
            {items.map((item, i) => <li key={i}>{item.trim()}</li>)}
          </ul>
        );
      }
      // Regular paragraph (if it's HTML or plain text)
      else {
        if (isHtml) {
          return <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />;
        } else {
          return <p key={index}>{paragraph}</p>;
        }
      }
    });
  };
  
  

  // Helper function to render project sections
  const renderSection = (title, content, isHtml=false) => {
    if (!content) return null;
    
    return (
      <div className="project-section">
        <h3>{title}</h3>
        {processContent(content, isHtml)}
      </div>
    );
  };

  // Define the sections to display based on project
  const sectionsToRender = [
    { title: "Introduction", field: "introduction" },
    { title: "Problem Statement", field: "problem" },
    {title: "Graph Generation", field: "graph_genration" },
    { title: "Project Goal", field: "goal" },
    { title: "Solution", field: "solution" },
    { title: "Project Overview", field: "overview" },
    { title: "Implementation", field: "implementation" },
    { title: "Algorithms", field: "algorithms" },
    { title: "Experiment", field: "experiment" },
    { title: "Results", field: "results" },
    { title: "Parallelization", field: "parallelization" },
    { title: "Analysis", field: "analysis" },
    { title: "Tools", field: "tools" },
    { title: "Design Process", field: "process" },
    { title: "Applications", field: "applications" },
    { title: "Impact", field: "impact" },
    { title: "Paper", field: "paper" },

    
  ];

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
        {/* Render the structured sections if available */}
        {sectionsToRender.map(section => 
          renderSection(section.title, project[section.field], section.field === "paper")
        )}
        
        {/* If no structured sections are found, fall back to the description field */}
        {!sectionsToRender.some(section => project[section.field]) && 
          project.description && project.description.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return <h3 key={index}>{paragraph.substring(3)}</h3>;
            } else {
              return processContent(paragraph)[0];
            }
          })
        }
      </div>
      
      <div className="project-skills">
        <h3>Skills & Technologies</h3>
        <div className="skills-tags">
          {project.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
      {project.screenshots && project.screenshots.length > 0 && (
        <div className="project-screenshots">
          <h3>Project Screenshots</h3>
          <div className="screenshots-grid">
            {project.screenshots.map((shot, index) => (
              <img
                key={index}
                src={shot}
                alt={`Screenshot ${index + 1}`}
                className="screenshot-image"
              />
            ))}
          </div>
        </div>
      )}
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
      {project.paperLink && (
        <div className="project-paper">
          <h3>Research Paper</h3>
          <p>
            <a 
              href={project.paperLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="paper-link"
            >
              {project.paperTitle || "View Full Research Paper"}
            </a>
          </p>
        </div>
        )}
      
        
    </div>
  );
}

export default ProjectDetail;