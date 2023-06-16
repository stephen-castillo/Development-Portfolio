import stackIcon from "../../assets/images/stackoverflow.svg";
import LinkedIn from "../../assets/images/LI-In-Bug.png";
import IconGitHub from "../../assets/images/github.svg";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";


const FOOTER = () => {
    return (
    <Container className="footer-container">
        <Row className="footer-row justify-content-center">
            <Col sm={4} md={4} lg={4} className="d-flex align-items-center justify-content-center">
            <a href="https://github.com/stephen-castillo" target="_blank" rel="noreferrer noopener">
                <img src={IconGitHub} alt="github icon" className="footer" />
            </a>
            </Col>
            <Col sm={4} md={4} lg={4} className="d-flex align-items-center justify-content-center">
            <a href="https://www.linkedin.com/in/stephen-castillo-80a524102" target="_blank" rel="noreferrer noopener">
                <img src={LinkedIn} alt="linkedin icon" className="footer" />
            </a>
            </Col>
            <Col sm={4} md={4} lg={4} className="d-flex align-items-center justify-content-center">
            <a href="https://github.com/stephen-castillo" target="_blank" rel="noreferrer noopener">
                <img src={stackIcon} alt="stack overflow icon" className="footer" />
            </a>
            </Col>
        </Row>
        <Row className="footer-row justify-content-center">
            <Col sm={4} md={4} lg={4} className="d-flex align-items-center justify-content-center">
            <p className="text-center">Copyright 2024</p>
            </Col>
        </Row>
    </Container>
    );
  }
  
  export default FOOTER;