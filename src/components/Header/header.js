import NAV from './navigation/nav';
import Navbar from "react-bootstrap/Navbar";


export default function HEADER (props) {
    return (
      <Navbar collapseOnSelect className="navbar" variant="dark" expand="sm" aria-current="true">
        <Navbar.Brand href="/Development-Portfolio" className="name">
          {" "}
          Stephen Castillo
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