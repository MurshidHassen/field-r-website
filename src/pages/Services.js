import React, { Component } from 'react'
import FieldRNavbar from '../components/FieldRNavbar'
import { Container, Row, Col, Card } from "react-bootstrap";

export default class Services extends Component {
    render() {
        return (
            <div>
                <FieldRNavbar />
                <h1 style={{ color: "#25CCF7", fontSize: 50 }}><b>WHAT WE OFFER</b></h1>
                <Container>
                    {/* <Row >
                        <Col>
                            <label id="rcorners4Services"><img id="rcorners4ServicesImg" alt="Service 1" />
                                <Container>
                                    <Row>
                                        <Col>
                                            <h4 style={{ textAlign: "center", color: "#25CCF7" }}><b>Scoring App</b></h4>
                                        </Col>
                                    </Row>
                                </Container>
                            </label>
                        </Col>
                        <Col>
                            <label id="rcorners4Services"><img id="rcorners4ServicesImg" alt="Service 2" />
                                <Container>
                                    <Row>
                                        <Col>
                                            <h4 style={{ textAlign: "center", color: "#25CCF7" }}><b>Data Analytics</b></h4>
                                        </Col>
                                    </Row>
                                </Container>
                            </label>
                        </Col>
                    </Row> */}
                    <Row className="justify-content-md-center">
                        <Col>
                            <Card id="rcorners4Services" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", transition: "0.3s"}}><img id="rcorners4ServicesImg" alt="Service 2" />
                                <Container>
                                    <Row>
                                        <Col>
                                            <h4 style={{ textAlign: "center", color: "#25CCF7" }}><b>Data Analytics</b></h4>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <h1 style={{ fontSize: 50 }}><b>AWAIT FOR MORE</b></h1>
            </div>
        )
    }
}
