import React, { Component } from "react";
import "./App.css";
import TitleAndIcons from "./sections/TitleAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleAndIcons />
        <AboutSection />
        <SkillSection />
      </div>
    );
  }
}
