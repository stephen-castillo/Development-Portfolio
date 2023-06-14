import CV from '../../assets/Stephen-Castillo.pdf';
const RESUME = () => {
    return (
      <div>
        <h2 className="title">Resume</h2>
        <div className="resume-group">
            <div className="proficiency-group">
                <div className="frontend-proficienty">
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
                <div className="backend-proficienty">
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
                <div className="other-proficienty">
                    <h3>Other Proficiency</h3>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Heroku</li>
                        <li>Python</li>
                        <li>PHP</li>
                    </ul>
                </div>
                <div className="tools-proficienty">
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
                <a href={CV} target="_blank" rel="noopener noreferrer" className="download"> Download Resume</a>
            </div>
        </div>
      </div>
    );
  }
  
  export default RESUME;