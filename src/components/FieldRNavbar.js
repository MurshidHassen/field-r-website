import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import fieldr from "../images/FieldR.png";
import {Row, Col} from "react-bootstrap";

export default class FieldRNavbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" variant="light" className="justify-content-between">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={fieldr}
              style={{ width: "140px", height: "60px"}}
              className="d-inline-block align-top "
            />{" "}
          </Navbar.Brand>
          <Row>
            <Col md="8">
            </Col>
            <Col>
          <Nav className="mr-auto topnav-right">
            <Nav.Link className="nav-rcorners2" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-rcorners2" href="/aboutus">
              About us
            </Nav.Link>
            <Nav.Link className="nav-rcorners2" href="/ourteam">
              Our Team
            </Nav.Link>
            <Nav.Link className="nav-rcorners2" href="/services">
              Services
            </Nav.Link>
            <Nav.Link className="nav-rcorners2" href="/careers">
              Careers
            </Nav.Link>
            <Nav.Link className="nav-rcorners2" href="/contactus">
              Contact Us
            </Nav.Link>
          </Nav>
          </Col>
          </Row>
        </Navbar>
      </React.Fragment>
    );
  }
}

