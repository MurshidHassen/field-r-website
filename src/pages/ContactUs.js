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
                            <p style={{ color: "#25CCF7", fontSize: "24px", fontWeight: "bolder"}}><b>FOR DEMO</b></p>
                            <form style={{ }} id="rcornersFormInside">
                                <Row>
                                    <Col>
                                        <label style={{color: "#25CCF7", fontSize: "1rem" , fontWeight: "bold", height: "90%"}}>Club/School Name:</label>
                                    </Col>
                                    <Col></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input style={{ width: "90%", borderRadius: "16px", borderColor: "#25CCF7"}}></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label style={{color: "#25CCF7", fontSize: "1rem" , fontWeight: "bold"}}>Division: </label>
                                    </Col>
                                    <Col xs="10"></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input style={{ width: "90%", borderRadius: "16px", borderColor: "#25CCF7"}}></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="5">
                                        <label style={{color: "#25CCF7", fontSize: "1rem" , fontWeight: "bold"}}>Name of Coach:</label>
                                    </Col>
                               </Row>
                                <Row>
                                    <Col>
                                        <input style={{ width: "90%", borderRadius: "16px", borderColor: "#25CCF7"}}></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="5">
                                        <label style={{color: "#25CCF7", fontSize: "1rem" , fontWeight: "bold"}}>District Name:</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input style={{ width: "90%", borderRadius: "16px", borderColor: "#25CCF7"}}></input>
                                    </Col>
                                </Row>
                                <Row> 
                                    <Col md="6">
                                        <label style={{color: "#25CCF7", fontSize: "1rem" , fontWeight: "bold"}}><b>Contact number:</b></label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input style={{ width: "90%", borderRadius: "16px", borderColor: "#25CCF7"}}></input>
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
                                        <Button style={{ width: "60%", borderRadius: "25px" }} title="Submit" size="lg" disabled>   Submit    </Button>
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
                                        <label style={{color: "#25CCF7", fontSize: "1rem" , fontWeight: "bold"}}>Name of the Investor:</label>
                                    </Col>
                                    <Col xs="4"></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input style={{ width: "90%", borderRadius: "16px", borderColor: "#25CCF7"}}></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label style={{color: "#25CCF7", fontSize: "1rem" , fontWeight: "bold"}}>Belonging Institution:</label>
                                    </Col>
                                    <Col xs="4"></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input style={{ width: "90%", borderRadius: "16px", borderColor: "#25CCF7"}}></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label style={{color: "#25CCF7", fontSize: "1rem" , fontWeight: "bold"}}>Contact Number:</label>
                                    </Col>
                                    <Col xs="4"></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input style={{ width: "90%", borderRadius: "16px", borderColor: "#25CCF7"}}></input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label style={{color: "#25CCF7", fontSize: "1rem" , fontWeight: "bold"}}>Required Information:</label>
                                    </Col>
                                    <Col xs="4"></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <textarea style={{ width: "90%", borderRadius: "16px", borderColor: "#25CCF7"}}></textarea>
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
                                        <Button style={{ width: "60%", borderRadius: "25px" }} title="Submit" size="lg" disabled>   Submit    </Button>
                                    </Col>
                                </Row>                            </form>
                        </div>
                    </Row>
                </Container>
            </React.Fragment >
        )
    }
}
