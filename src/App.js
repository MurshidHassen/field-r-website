import React from "react";
import "./styles.css";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import Services from "./pages/Services";
import OurJourney from "./pages/OurJourney";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact render={
          () => {
            return (<Home />)
          }
        }>
        </Route>
        <Route path="/aboutus" exact render={
          () => {
            return (
              <AboutUs />
            )
          }
        }>
        </Route>
        <Route path="/ourteam" exact render={
          () => {
            return (
              <OurTeam />
            )
          }
        }>
        </Route>
        <Route path="/services" exact render={
          () => {
            return (
              <Services />
            )
          }
        }>
        </Route>
        <Route path="/careers" exact render={
          () => {
            return (<Careers />)
          }
        }>
        </Route>
        <Route path="/ourjourney" exact render={
          () => {
            return (<OurJourney />)
          }
        }>
        </Route>
        <Route path="/contactus" exact render={
          () => {
            return (<ContactUs />)
          }
        }>
        </Route>
      </div>
    </Router>
  );
}
