import Nav from "react-bootstrap/Nav";
import "./nav.css";

export default function NAV(props) {
    const { setCurrentPage } = props;
    return (
        <Nav className="components">
            <Nav.Link className="component-link" href="#aboutme" onClick={() => { setCurrentPage("AboutMe"); }}>About</Nav.Link>

            <Nav.Link className="component-link" href="#portfolio" onClick={() => {setCurrentPage("Portfolio");}}>Projects</Nav.Link>

            <Nav.Link className="component-link" href="#contact" onClick={() => {setCurrentPage("Contact");}}>Contact</Nav.Link>

            <Nav.Link className="component-link" href="#resume" onClick={() => {setCurrentPage("Resume");}}>Resume</Nav.Link>
        </Nav>
    );
}