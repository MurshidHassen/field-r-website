import React from "react";
import "./styles.css";
import { Index } from "./pages/Index";
import { AboutUs } from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import Services from "./pages/Services";
import OurJourney from "./pages/OurJourney";

export default function App() {
  return (
    <div className="App">
      {/* <Index /> */}
      {/* <AboutUs/> */}
      {/* <OurTeam/> */}
      {/* <Services/> */}
      <OurJourney/>
    </div>
  );
}
