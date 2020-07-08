import React, { Component } from 'react'
import FieldRNavbar from '../components/FieldRNavbar'
import { Container, Row, Col, Card } from "react-bootstrap";
import Thariq from "../images/thariq.jpg";
import Azhar from "../images/azharanees.PNG";
import Christina from "../images/christinadelile.PNG";
import Nasif from "../images/nasifnuha.PNG"
import Tharaka from "../images/tharaka.jpg";

export default class OurTeam extends Component {
    render() {
        return (
            <React.Fragment>
                <FieldRNavbar />
                <h1 style={{ color: "#25CCF7", fontSize: 50 }}><b>OUR TEAM</b></h1>
                <h3 style={{ color: "#25CCF7" }}><b>CO - FOUNDERS</b></h3>
                <Container>
                    <Row >
                        <Col>
                            <Card id="rcorners4" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}><img id="rcorners2" src={Thariq} alt="Thariq" />
                                <Container>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Thariq Hamad</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                        </Col>
                        <Col>
                            <Card id="rcorners4" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}><img id="rcorners2"  src={Azhar} alt="Azhar"/>
                                <Container>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Azhar Anees</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                        </Col>
                        <Col>
                            <Card id="rcorners4" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}><img id="rcorners2" src={Christina} alt="Christina" />
                                <Container>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Christina De Lile</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                        </Col>
                        <Col>
                            <Card id="rcorners4" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }} ><img id="rcorners2" src={Nasif} alt="Nasif" />
                                <Container>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Nasif Nuha</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col>
                        <h3 style={{ color: "#25CCF7", paddingTop: "50px" }}><b>ADVISOR</b></h3>
                        </Col>
                    </Row>
                    <Row  className="justify-content-md-center">
                            <Card id="rcorners4" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}><img id="rcorners2" src={Tharaka}  alt="Tharaka"/>
                                <Container>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Tharaka Samarathunga</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
