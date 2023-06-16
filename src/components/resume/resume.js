import CV from '../../assets/Stephen-Castillo.pdf';
import { Button } from 'react-bootstrap';
import './resume.css';

const RESUME = () => {
    return (
      <div>
        <h2 className="title">Resume</h2>
        <div className="resume-group d-flex flex-column align-items-center">
            <div className="proficiency-group">
                <div className="frontend-proficiency">
                    <h3>Front End</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                        <li>Fetch</li>
                        <li>AJAX</li>
                        <li>Handlebars.js</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className="backend-proficiency">
                    <h3>Back End</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>MVC</li>
                        <li>JSON</li>
                        <li>RESTful APIs</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
                <div className="other-proficiency">
                    <h3>Other Proficiencies</h3>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Heroku</li>
                        <li>Python</li>
                        <li>PHP</li>
                    </ul>
                </div>
                <div className="tools-proficiency">
                    <h3>Tools</h3>
                    <ul>
                        <li>Visual Studio Code</li>
                        <li>HeidiSQL</li>
                        <li>Insomnia</li>
                        <li>MongoDB Compass</li>
                        <li>GitHub Desktop</li>
                        <li>PuTTY</li>
                    </ul>
                </div>
                <Button><a href={CV} target="_blank" rel="noopener noreferrer" className="download"> Download Resume</a></Button>
            </div>
        </div>
      </div>
    );
  }
  
  export default RESUME;