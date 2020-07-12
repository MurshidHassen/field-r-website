import React, { Component } from 'react'
import FieldRNavbar from '../components/FieldRNavbar'
import { Container, Row, Col, Button } from "react-bootstrap";
import { DemoModel } from "../models/DemoModel";
import { InvestorModel } from "../models/InvestorModel";

export default class ContactUs extends Component {

    demoModel = DemoModel;
    investorModel = InvestorModel;

    constructor(props) {
        super(props);
        this.state = {
            schoolClubName: '',
            division: '',
            nameoftheCoach: '',
            districtName: '',
            contactNumber: '',
            nameofInvestor: '',
            belongingInstitution: '',
            investorContactNumber: '',
            requiredInformation: '',
            demo: {},
            investor: this.investorModel
        };

        // This binding is necessary to make `this` work in the callback
        this.handleSchoolClubNameChange = this.handleSchoolClubNameChange.bind(this);
        this.handleDivisionChange = this.handleDivisionChange.bind(this);
        this.handleNameOftheCoach = this.handleNameOftheCoach.bind(this);
        this.handleDistrictName = this.handleDistrictName.bind(this);
        this.handleContactNumber = this.handleContactNumber.bind(this);
        this.handleNameOfInvestor = this.handleNameOfInvestor.bind(this);
        this.handleBelongInstitution = this.handleBelongInstitution.bind(this);
        this.handleInvestorContactNumber = this.handleInvestorContactNumber.bind(this);
        this.handleRequiredContactNumber = this.handleRequiredContactNumber.bind(this);

        this.demoRequest = this.demoRequest.bind(this);
        this.investment = this.investment.bind(this);
    }

    handleSchoolClubNameChange(event) {
        console.log("change for schoolname ", event.target.value);
        this.setState({ schoolClubName: event.target.value })
    }

    handleDivisionChange(event) {
        console.log("change for schoolname ", event.target.value);
        this.setState({ division: event.target.value })
    }

    handleNameOftheCoach(event) {
        console.log("change for schoolname ", event.target.value);
        this.setState({ nameoftheCoach: event.target.value })
    }

    handleDistrictName(event) {
        console.log("change for schoolname ", event.target.value);
        this.setState({ districtName: event.target.value })
    }

    handleContactNumber(event) {
        console.log("change for schoolname ", event.target.value);
        this.setState({ contactNumber: event.target.value })
    }

    handleNameOfInvestor(event) {
        console.log("change for schoolname ", event.target.value);
        this.setState({ nameofInvestor: event.target.value })
    }

    handleBelongInstitution(event) {
        console.log("change for schoolname ", event.target.value);
        this.setState({ belongingInstitution: event.target.value })
    }

    handleInvestorContactNumber(event) {
        console.log("change for schoolname ", event.target.value);
        this.setState({ investorContactNumber: event.target.value })
    }

    handleRequiredContactNumber(event) {
        console.log("change for schoolname ", event.target.value);
        this.setState({ requiredInformation: event.target.value })
    }

    cancelCourse = () => { 
        this.setState({
            schoolClubName: '',
            division: '',
            nameoftheCoach: '',
            districtName: '',
            contactNumber: '',
            nameofInvestor: '',
            belongingInstitution: '',
            investorContactNumber: '',
            requiredInformation: ''
        });
      }

    demoRequest(e) {
        e.preventDefault();
        console.log("State values ", this.state.schoolClubName)
        alert(this.state.schoolClubName)

        fetch('http://localhost:5000/demo', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'success') {
                alert("Message Sent.");
                this.cancelCourse();
            } else if (response.status === 'fail') {
                alert("Message failed to send.")
            }
        })

    }


    investment(e) {
        e.preventDefault();
        alert("for investment ")
        console.log(this.state.nameofInvestor);

        fetch('http://localhost:5000/investment', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'success') {
                alert("Message Sent.");
                this.cancelCourse()
            } else if (response.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }







    render() {
        return (
            <React.Fragment>
                <FieldRNavbar />
                <h1 style={{ color: "#25CCF7", fontSize: 50 }}><b>CONTACT US</b></h1>
                <Container >
                    <Row >
                        <div id="rcornersForm" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", transition: "0.3s" }}>
                            <p style={{ color: "#25CCF7", fontSize: "24px", fontWeight: "bolder" }}><b>FOR DEMO</b></p>
                            <form style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", transition: "0.3s", borderColor: "black" }} id="rcornersFormInside" onSubmit={this.demoRequest}>
                                <Row>
                                    <Col>
                                        <label style={{ color: "#25CCF7", fontSize: "1rem", fontWeight: "bold", height: "90%" }}>Club/School Name:</label>
                                    </Col>
                                    <Col></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input type="text" style={{ width: "90%", borderRadius: "16px", borderColor: "#25CCF7" }} value={this.state.schoolClubName} onChange={this.handleSchoolClubNameChange} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label style={{ color: "#25CCF7", fontSize: "1rem", fontWeight: "bold" }}>Division: </label>
                                    </Col>
                                    <Col xs="10"></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input type="text" style={{ width: "90%", borderRadius: "16px", borderColor: "#25CCF7" }} value={this.state.division} onChange={this.handleDivisionChange} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="5">
                                        <label style={{ color: "#25CCF7", fontSize: "1rem", fontWeight: "bold" }}>Name of Coach:</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input type="text" style={{ width: "90%", borderRadius: "16px", borderColor: "#25CCF7" }} value={this.state.nameoftheCoach} onChange={this.handleNameOftheCoach} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="5">
                                        <label style={{ color: "#25CCF7", fontSize: "1rem", fontWeight: "bold" }}>District Name:</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input type="text" style={{ width: "90%", borderRadius: "16px", borderColor: "#25CCF7" }} value={this.state.districtName} onChange={this.handleDistrictName} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <label style={{ color: "#25CCF7", fontSize: "1rem", fontWeight: "bold" }}><b>Contact number:</b></label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input type="text" style={{ width: "90%", borderRadius: "16px", borderColor: "#25CCF7" }} value={this.state.contactNumber} onChange={this.handleContactNumber} />
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
                                        <input type="submit" title="Submit" style={{ width: "60%", borderRadius: "25px", backgroundColor: "#25CCF7", color: "white" }} />
                                    </Col>
                                </Row>
                            </form>
                        </div>
                        <Col>
                        </Col>
                        <div id="rcornersForm" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", transition: "0.3s" }}>
                            <p style={{ color: "#25CCF7", fontSize: 24 }}><b>FOR INVESTMENTS</b></p>
                            <form style={{ textAlign: "center", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", transition: "0.3s", borderColor: "black" }} id="rcornersFormInside" onSubmit={this.investment}>
                                <Row>
                                    <Col>
                                        <label style={{ color: "#25CCF7", fontSize: "1rem", fontWeight: "bold" }}>Name of the Investor:</label>
                                    </Col>
                                    <Col xs="4"></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input type="text" style={{ width: "90%", borderRadius: "16px", borderColor: "#25CCF7" }} value={this.state.nameofInvestor} onChange={this.handleNameOfInvestor} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label style={{ color: "#25CCF7", fontSize: "1rem", fontWeight: "bold" }}>Belonging Institution:</label>
                                    </Col>
                                    <Col xs="4"></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input type="text" style={{ width: "90%", borderRadius: "16px", borderColor: "#25CCF7" }} value={this.state.belongingInstitution} onChange={this.handleBelongInstitution} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label style={{ color: "#25CCF7", fontSize: "1rem", fontWeight: "bold" }}>Contact Number:</label>
                                    </Col>
                                    <Col xs="4"></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input type="text" style={{ width: "90%", borderRadius: "16px", borderColor: "#25CCF7" }} value={this.state.investorContactNumber} onChange={this.handleInvestorContactNumber} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label style={{ color: "#25CCF7", fontSize: "1rem", fontWeight: "bold" }}>Required Information:</label>
                                    </Col>
                                    <Col xs="4"></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <textarea style={{ width: "90%", borderRadius: "16px", borderColor: "#25CCF7" }} value={this.state.requiredInformation} onChange={this.handleRequiredContactNumber}></textarea>
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
                                        <input type="submit" title="Submit" style={{ width: "60%", borderRadius: "25px", backgroundColor: "#25CCF7", color: "white" }} />
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Row>
                </Container>
            </React.Fragment >
        )
    }
}
