import React from 'react';
import './portfolio.css';
import PROJECT from '../project/project';
import IMG1 from '../../assets/images/foodie-fetch-screenshot.png';
import IMG2 from '../../assets/images/quickdecks.jpg';
import IMG3 from '../../assets/images/jate-pwa.jpg';
import IMG4 from '../../assets/images/ecommerce.jpg';
import IMG5 from '../../assets/images/employee-tracker.jpg';
import IMG6 from '../../assets/images/readme-generator.png';
import IMG7 from '../../assets/images/IMA-GEN-screenshot.png';

const PORTFOLIO = () => {

  const projects = [
		{
			id: 1,
			name: 'Foodie-Fetch',
			description:
				'An application that allows users to find recipes based on culinary preferences and dietary restrictions.',
			link: 'https://github.com/stephen-castillo/Foodie-Fetch',
			img: IMG1,
		},
		{
			id: 2,
			name: 'Quickdecks',
			description:
				'Quickdecks is an application where users can review and test their learning by creating flashcards and quizzes for their subjects of choice.',
			link: 'https://github.com/stephen-castillo/Project2',
			img: IMG2,
		},
		{
			id: 3,
			name: 'JATE-PWA',
			description:
				'This application takes an existing text editor app and adds functionality for it to work as a PWA and function offline.',
			link: 'https://github.com/stephen-castillo/JATE-PWA',
			img: IMG3,
		},
		{
			id: 4,
			name: 'E-Commerce_Site',
			description:
				'This application is an e-commerce back end that uses ORM to interact with a MySQL database',
			link: 'https://github.com/stephen-castillo/E-Commerce_Site',
			img: IMG4,
		},
		{
			id: 5,
			name: 'Employee-Tracker',
			description:
				"This is a simple employee tracker program written in Node.js. It allows you to keep track of your company's employees, including their names, roles, salaries, and departments.",
			link: 'https://github.com/stephen-castillo/Employee-Tracker',
			img: IMG5,
		},
		{
			id: 6,
			name: 'Readme-Generator',
			description:
				'A simple program that quickly generates a profession project readme',
			link: 'https://github.com/stephen-castillo/Readme-Generator',
			img: IMG6,
		},
		{
			id: 7,
			name: 'IMA-GEN',
			description:
				'An react app that uses the DALLE AI image generator api to generate images based on user input.',
			link: 'https://github.com/stephen-castillo/IMA-GEN',
			img: IMG7,
		},
  ];

  return (
    <div>
       <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <PROJECT title={project.name}>
                <img src={project.img} alt={project.name} />
                <p>{project.description}</p>
                <p><a href={project.link}>{project.link}</a></p>
            </PROJECT>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PORTFOLIO;
