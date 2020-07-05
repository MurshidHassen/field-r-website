import React from "react";
// import FieldRNavbar from "../components/navbar";
import FieldRNavbar from '../components/FieldRNavbar'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Home extends React.Component {
  render() {
    return (<React.Fragment>
            <FieldRNavbar />
            <Container>
            <Row>
              <Col>
                <label style={{ fontSize: "40px", paddingBottom: "50px", paddingTop: "50px" }}><b>INCREASING PLAYERS AND TEAMS</b></label>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 style={{fontWeight: "bold", fontSize: "96px", color: "#25CCF7" }}>HIGH PERFORMANCE</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 style={{fontSize: "40px", paddingTop: "40px", paddingBottom: "40px"}}>THROUGH DATA, ANALYSIS, & PRACTICE</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <label style={{ fontSize: "20px", }} >With Evolving Technology,FieldR Helps You Recognize Talent and Train Them, <br></br>
With Data To Increase Their Performance To Be Competitive.  </label>
              </Col>
            </Row>
            <Row>
              <Col md="4">
              </Col>
              <Col>
              <ul>
              <Link to="/ourjourney"><li type="submit"  style={{ borderRadius: "15px", color: "#FFFFFF", color: "#25CCF7", borderColor: "#25CCF7", height: 50, paddingTop: 15,  border: "2px solid lightskyblue"}}> <b>To Know Our Journey </b></li></Link>
              </ul>
              </Col>
              <Col md="4">
              </Col>
            </Row>
            </Container>
            </React.Fragment>
      );
  }
}
