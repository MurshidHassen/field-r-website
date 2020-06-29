import React from "react";
// import FieldRNavbar from "../components/navbar";
import FieldRNavbar from '../components/FieldRNavbar'
import FieldRButton from "../components/FieldRButton";

export class Index extends React.Component {
  render() {
    return (<React.Fragment>
            <FieldRNavbar />
            <div className="row">
              <div className="col">
                <label>INCREASING PLAYERS AND TEAMS</label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h1>HIGH PERFORMANCE</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3>THROUGH DATA, ANALYSIS, & PRACTICE</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>With Evolving Technology,  FieldR Helps You Recognize Talent and Train Them, 
With Data To Increase Their Performance To Be Competitive.  </label>
              </div>
            </div>
            <FieldRButton title="To Know Our Journey"/>
            </React.Fragment>
      );
  }
}
