import React from 'react';

function Projects() {
  const projectList = [
    {
      id: 1,
      title: "F1 Race Tracking and Historical Statistics Visualization Platform",
      description: "The system integrates historical race data and real-time API data and presents them through an interactive 2D race track replay system along with analytical dashboards.",
      github: "https://github.com/phalgunareddy65/F1-Track"
    },
    {
      id: 2,
      title: "NLP Chatbot",
      description: "A natural language processing chatbot utilizing TensorFlow and Python for conversational AI.",
      github: "https://github.com/phalgunareddy65/Fake-News-Classifier"
    },
     {
      id: 3,
      title: "Project-Chronos-The-AI-archeologist",
      description: "Project Chronos uses Google Gemini’s AI to reconstruct incomplete historical texts by predicting missing words or phrases based on linguistic context and style. It generates a detailed report with the restored text and sources, aiding archaeologists and historians in recovering lost knowledge.",
      github: "https://github.com/phalgunareddy65/Project-Chronos-The-AI-archeologist"
    }
  ];

  return (
    <div className="page-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;