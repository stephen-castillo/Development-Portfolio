import './project.css';

const PROJECT = ({ title, children }) => {
    return (
        <div className="project-box">
            <div className="project-name">{title}</div>
            <div className="project-info">{children}</div>
        </div>
    );
}
  
export default PROJECT;
