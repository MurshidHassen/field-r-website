import React, { Component } from 'react'
import FieldRNavbar from '../components/FieldRNavbar'
import FieldR from "../images/FieldR.png"
import { Card, Container, Row, Col } from "react-bootstrap";

export class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <FieldRNavbar></FieldRNavbar>
                <h1 style={{ color: "#25CCF7" }}><b>ABOUT US</b></h1>
                <Container>
                    <Row>
                        <Col>
                <img src={FieldR} alt="FieldR" style={{ float: "left" }} className="img-about" />
                </Col>
                <Col>
                <Card style={{ paddingLeft: "40px", paddingRight: "40px",  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  transition: "0.3s"
  }}><h3 style={{ textAlign: "justify", fontSize: 20 }}>FieldR is a recent startup in the field of
                technology in sports. It holds a place amongst
                one of the analyzing tools implemented to
                revolutionize the field of cricket. This cricket
                analyzing mobile application is the consolidated
                solution to all your requirements to enhance
                gameplay during a match, concentrating on the
                aspects of bowling, batting, fielding and
maintaining a record of your team’s progress.</h3>
                </Card>
                </Col>
                </Row>
                <Row>

                </Row>
                <Row>
                    <Card style={{ paddingLeft: "40px", paddingRight: "40px", textAlign: "justify", fontSize: 20, boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  transition: "0.3s" }}>FieldR targets the cricket arena of Sri Lanka, ranging from national teams to schools and Clubs
                    who wishes to have an edge their performance with the aid of technology. FieldR captured a place
                    amongst the ecosystem category of the "Spiralation Seed Funding Program 2019" organized by
ICTA Sri Lanka and is currently climbing up the ladder to reach the industry </Card>
                </Row>
            </Container>

            </React.Fragment>
        )
    }
}
