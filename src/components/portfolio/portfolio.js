import React from 'react';
import './portfolio.css';
import PROJECT from '../project/project';

const PORTFOLIO = () => {

  const projects = [
    { id: 1, name: 'Project 1', description: 'Description 1' },
    { id: 2, name: 'Project 2', description: 'Description 2' },
    { id: 3, name: 'Project 3', description: 'Description 3' },
    { id: 4, name: 'Project 4', description: 'Description 4' },
    { id: 5, name: 'Project 5', description: 'Description 5' },
    { id: 6, name: 'Project 6', description: 'Description 6' },
  ];

  return (
    <div>
       <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <PROJECT key={project.id} title={project.name}>
            <p>{project.description}</p>
            <p>Project #{index + 1}</p>
            <p><a href="https://github.com">Project pages link</a></p>
          </PROJECT>
        ))}
      </div>
    </div>
  );
}

export default PORTFOLIO;
