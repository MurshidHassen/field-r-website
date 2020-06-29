import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import fieldr from "../images/FieldR.png";

export default class FieldRNavbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={fieldr}
              width="100"
              height="60"
              className="d-inline-block align-top nav-rcorners2"
            />{" "}
          </Navbar.Brand>
          <Nav className="mr-auto topnav-right">
            <Nav.Link className="nav-rcorners2" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-rcorners2" href="#aboutus">
              About us
            </Nav.Link>
            <Nav.Link className="nav-rcorners2" href="#ourteam">
              Our Team
            </Nav.Link>
            <Nav.Link className="nav-rcorners2" href="#services">
              Services
            </Nav.Link>
            <Nav.Link className="nav-rcorners2" href="#careers">
              Careers
            </Nav.Link>
            <Nav.Link className="nav-rcorners2" href="#contactus">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar>
      </React.Fragment>
    );
  }
}
