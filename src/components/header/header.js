import NAV from './navigation/nav';
import Navbar from "react-bootstrap/Navbar";
import "./header.css";


export default function HEADER (props) {
    return (
      <Navbar collapseOnSelect className="navbar" variant="dark" expand="sm" aria-current="true">
        <Navbar.Brand href="/Development-Portfolio" className="name">
          Stephen Castillo Portfolio
        </Navbar.Brand>
        {/* Responsive Navbars */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* wrap your Navs in a Navbar.Collapse component.  */}
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className=" justify-content-end"
        >
          <NAV setCurrentPage={props.setCurrentPage}></NAV>
        </Navbar.Collapse>
      </Navbar>
    );
}