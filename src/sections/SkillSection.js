import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";

import SkillCard from "../components/SkillCard";

export default class AboutSection extends Component {
  render() {
    return (
      <Fullpage className="3">
        <h1 className="skill-title">{data.sections[1].title}</h1>
        <div className="card-wrapper">
          {data.sections[1].items.map((eachskill) => {
            return <SkillCard skill={eachskill} />;
          })}
        </div>
      </Fullpage>
    );
  }
}
