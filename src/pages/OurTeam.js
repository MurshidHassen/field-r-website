import React, { Component } from 'react'
import FieldRNavbar from '../components/FieldRNavbar'
import { Container, Row, Col } from "react-bootstrap";

export default class OurTeam extends Component {
    render() {
        return (
            <div>
                <FieldRNavbar />
                <h1 style={{ color: "#25CCF7", fontSize: 50 }}><b>OUR TEAM</b></h1>
                <h3 style={{ color: "#25CCF7" }}><b>CO - FOUNDERS</b></h3>
                <Container>
                    <Row >
                        <Col>
                            <p id="rcorners4"><img id="rcorners2" />
                                <Container>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Name</p>
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
                            <p id="rcorners4"><img id="rcorners2" />
                                <Container>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Name</p>
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
                            <p id="rcorners4"><img id="rcorners2" />
                                <Container>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Name</p>
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
                            <p id="rcorners4"><img id="rcorners2" />
                                <Container>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Name</p>
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
                            <p id="rcorners4"><img id="rcorners2" />
                                <Container>
                                    <Row>
                                        <Col>
                                        <p style={{ textAlign: "center" }}>Name</p>
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
            </div>
        )
    }
}
