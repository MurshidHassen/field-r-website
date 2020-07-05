import React, { Component } from 'react'
import FieldRNavbar from '../components/FieldRNavbar'
import { Container, Row, Col } from "react-bootstrap";
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
                            <p id="rcorners4"><img id="rcorners2" src={Thariq} />
                                <Container>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Thariq Hamad</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Portforlio</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </p>
                        </Col>
                        <Col>
                            <p id="rcorners4"><img id="rcorners2"  src={Azhar}/>
                                <Container>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Azhar Anees</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Portforlio</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </p>
                        </Col>
                        <Col>
                            <p id="rcorners4"><img id="rcorners2" src={Christina} />
                                <Container>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Christina De Lile</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Portforlio</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </p>
                        </Col>
                        <Col>
                            <p id="rcorners4"><img id="rcorners2" src={Nasif} />
                                <Container>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Nasif Nuha</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Portforlio</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </p>
                        </Col>
                    </Row>
                    <h3 style={{ color: "#25CCF7" }}><b>ADVISOR</b></h3>
                    <Row  className="justify-content-md-center">
                            <p id="rcorners4"><img id="rcorners2" src={Tharaka} />
                                <Container>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Tharaka Samarathunga</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Portforlio</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </p>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
