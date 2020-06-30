import React, { Component } from 'react'
import FieldRNavbar from '../components/FieldRNavbar'
import FieldR from "../images/FieldR.png"
export class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <FieldRNavbar></FieldRNavbar>
                <h1 style={{ color: "#25CCF7"}}><b>ABOUT US</b></h1>
                <h3><img src={FieldR} style={{float:"left"}} className="img-about" /><h3 style={{float: "right", textAlign:"center"}}>FieldR is a recent startup in the field of 
technology in sports. It holds a place amongst 
one of the analyzing tools implemented to 
revolutionize the field of cricket. This cricket 
analyzing mobile application is the consolidated 
solution to all your requirements to enhance 
gameplay during a match, concentrating on the 
aspects of bowling, batting, fielding and 
maintaining a record of your team’s progress.</h3>
                </h3>
                <h3>FieldR targets the cricket arena of Sri Lanka, ranging from national teams to schools and Clubs 
who wishes to have an edge their performance with the aid of technology. FieldR captured a place
amongst the ecosystem category of the "Spiralation Seed Funding Program 2019" organized by
ICTA Sri Lanka and is currently climbing up the ladder to reach the industry </h3>
            </React.Fragment>
        )
    }
}
