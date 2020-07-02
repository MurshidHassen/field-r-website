import React, { Component } from 'react'
import FieldRNavbar from '../components/FieldRNavbar'
import { Container, Row, Col } from "react-bootstrap";

export default class Services extends Component {
    render() {
        return (
            <div>
                <FieldRNavbar/>
                <h1 style={{ color: "#25CCF7", fontSize: 50 }}><b>WHAT WE OFFER</b></h1>
                <Container>
                <Row >
                        <Col>
                            <p id="rcorners4Services"><img id="rcorners4ServicesImg" />
                                <Container>
                                    <Row>
                                        <Col>
                                        <h4 style={{ textAlign: "center", color: "#25CCF7" }}><b>Scoring App</b></h4>
                                        </Col>
                                    </Row>
                                </Container>
                            </p>
                        </Col>
                        <Col>
                            <p id="rcorners4Services"><img id="rcorners4ServicesImg" />
                                <Container>
                                    <Row>
                                        <Col>
                                        <h4 style={{ textAlign: "center", color: "#25CCF7" }}><b>Data Analytics</b></h4>
                                        </Col>
                                    </Row>
                                </Container>
                            </p>
                        </Col>
                </Row>
                </Container>
                <h1 style={{ fontSize: 50 }}><b>AWAIT FOR MORE</b></h1>
            </div>
        )
    }
}
