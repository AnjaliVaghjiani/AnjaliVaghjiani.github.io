import React, { useState } from 'react';
import '../css/AboutMe.css'; // Make sure you have styles for the buttons here
import LLMImage from '../Images/LLM.pdf';
import RequestCVForm from './RequestCV';

function AboutMe() {
  const [showRequestForm, setShowRequestForm] = useState(false);

  const handleRequestCV = () =>{
    setShowRequestForm(true);
  }

  const handleCloseForm = () => {
    setShowRequestForm(false);
  }

  return (
    <div className="about-me-container">
      <h1>Know Me More</h1>
      <h2>
        Hello! I'm <span style={{color: '#78FABC'}}>Anjali Vaghjiani</span>, a passionate computer engineer specializing in AI and Data Science.
      </h2>
      <p>
        Computer Engineer currently pursuing a master's degree in 
                    Artificial Intelligence and Data Science at Politecnico di Torino. 
                    My interests lie at the intersection of machine learning, data science, and intelligent systems. 
                    I work with a range of AI technologies, including deep learning, natural language processing, and large language models (LLMs).
                    With a strong foundation in programming, data analysis, and model development, I enjoy building solutions that are both innovative and practical. 
                    Take a look around to see some of my work, or feel free to contact me. I’m always open to new ideas and collaborations.

      </p>

      {/* My Education Section */}
      <section className="education-section">
        <h1>My Education</h1>
        {/* Education Entry 1 */}
        <div className="education-card">
          <div className="education-year">2023 - Present</div>
          <div className="education-details">
            <h3>Master in Computer Engineering</h3>
            <h4>Artificial Intelligence and Data Science</h4>
            <p><em><span style={{color: '#78FABC'}}>Politecnico di Torino</span></em></p>
          </div>
        </div>

        {/* Education Entry 2 */}
        <div className="education-card">
          <div className="education-year">2019 - 2023</div>
          <div className="education-details">
            <h3>Bachelor in Computer Engineering</h3>
            <p><em><span style={{color: '#78FABC'}}>Politecnico di Torino</span></em></p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
<section className="skills-section">
  <h1>My Skills</h1>

  <div className="skills-category">
    <h3>Programming Languages</h3>
    <p>C, Python, Java, C++, Object Oriented Programming (OOP)</p>
  </div>

  <div className="skills-category">
    <h3>Web Technology</h3>
    <p>Bootstrap, CSS, JavaScript (Node.js, Express.js), HTML, React Native, Web API, SQL</p>
  </div>

  <div className="skills-category">
    <h3>Machine Learning</h3>
    <p>NLP Pipelines, Python, Numpy, PyTorch, Pandas, Scikit-Learn, TensorFlow</p>
  </div>

  <div className="skills-category">
    <h3>Graphical</h3>
    <p>Canva, Figma</p>
  </div>

  <div className="skills-category">
    <h3>Operating System</h3>
    <p>Linux (Command line, user level, and OS knowledge)</p>
  </div>

  <div className="skills-category">
    <h3>Big Data Technologies</h3>
    <p>Hadoop, Apache Spark</p>
  </div>

  <div className="skills-category">
    <h3>Extra Skills</h3>
    <p>Microsoft Office: Word, Excel, PowerPoint, Access</p>
    <p>GitHub</p>
  </div>
</section>

{/* Certificates Section */}
<section className="certificates-section">
  <h1>Certificates</h1>

    <div className="certificate-card">
      <h3>LLM Engineering</h3>
      <ul className="certificate-details">
    <li><strong>Course Overview:</strong> Attended an advanced online course on applied Large Language Models (LLMs) and AI workflows</li>
    <li><strong>Projects Built:</strong>
      <ul>
        <li>Intelligent brochure generator that scrapes and navigates websites</li>
        <li>Multi-modal airline support agent with UI and function-calling</li>
        <li>Audio-based meeting summarizer with action item extraction</li>
        <li>Python-to-C++ converter achieving massive performance gains</li>
        <li>RAG-based AI knowledge worker for company expertise</li>
      </ul>
    </li>
    <li><strong>Capstone Completed:</strong>
      <ul>
        <li>Price prediction using frontier models from short descriptions</li>
        <li>Fine-tuned open-source models to match frontier performance</li>
        <li>Built autonomous multi-agent system to spot and alert on product deals</li>
      </ul>
    </li>
    <li><strong>Exploration:</strong> Explored and compared the top 10 frontier and 10 open-source LLMs</li>
    <li><strong>Techniques Applied:</strong> Applied advanced techniques like RAG, fine-tuning, and agentic workflows</li>
  </ul>
      <a href={LLMImage} target="_blank" rel="noopener noreferrer">
        View Certificate
      </a>
    </div>

    <div className="certificate-card">
      <h3>React (basic) </h3>
      <p>Earned React (Basic) certification from HackerRank, demonstrating proficiency in core React concepts including components, props, state, hooks, and basic UI logic.</p>
      <a href="https://www.hackerrank.com/certificates/iframe/d9f4918266ed" target="_blank" rel="noopener noreferrer">
        View Certificate
      </a>
    </div>

    <div className="certificate-card">
      <h3>SQL (Intermediate) </h3>
      <p>Earned SQL (Intermediate) certification, showcasing advanced skills in database querying, including complex joins, subqueries, data manipulation, indexing, and optimization techniques for efficient data retrieval and analysis.</p>
      <a href="https://www.hackerrank.com/certificates/13fe126fb2c7" target="_blank" rel="noopener noreferrer">
        View Certificate
      </a>
    </div>

    {/* Add more certificate cards as needed */}
</section>



      {/* Buttons Below the Description */}
      <div className="buttons-container">
          <button className="download-cv-btn" onClick={handleRequestCV}>Request CV</button>
        
        
        <a href="/contact">
          <button className="contact-me-btn">Contact Me</button>
        </a>
      </div>
      {showRequestForm && (
        <RequestCVForm onClose={handleCloseForm} />
      )}
    </div>
  );
}

export default AboutMe;
