import React, { Component } from 'react'
import FieldRNavbar from '../components/FieldRNavbar'
import { Container, Row, Col, Button } from "react-bootstrap";


export default class ContactUs extends Component {
    render() {
        return (
            <React.Fragment>
                <FieldRNavbar />
                <h1 style={{ color: "#25CCF7", fontSize: 50 }}><b>CONTACT US</b></h1>
                <Container >
                    <Row >
                        <div id="rcornersForm">
                            <p style={{ color: "#25CCF7", fontSize: 24 }}><b>FOR DEMO</b></p>
                            <form style={{ textAlign: "center" }} id="rcornersFormInside">
                                <Row>
                                    <Col>
                                        <label>Club/School Name:</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label>Division: </label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label>Name of Coach:</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label>District Name:</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label>Contact number:</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label>
                                        </label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <Button style={{ width: "90%" }} title="Submit" size="lg" disabled>   Submit    </Button>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                        <Col>
                        </Col>
                        <div id="rcornersForm">
                            <p style={{ color: "#25CCF7", fontSize: 24 }}><b>FOR INVESTMENTS</b></p>
                            <form style={{ textAlign: "center" }} id="rcornersFormInside">
                                <Row>
                                    <Col>
                                        <label>Name of the Investor:</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label>Belonging Institution:</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label>Contact Number:</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label>Required Information:</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <textarea></textarea>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label>
                                        </label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <Button style={{ width: "90%" }} title="Submit" size="lg" disabled>   Submit    </Button>
                                    </Col>
                                </Row>                            </form>
                        </div>
                    </Row>
                </Container>
            </React.Fragment >
        )
    }
}
