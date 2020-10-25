import React, { Component } from "react";
import "./skillcard.css";
export default class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="card">
        <div className="image-wrapper">
          <img alt="" src={skill.content.image} />
        </div>
        <div className="skill-title-wrapper">
          <h4>{skill.content.title}</h4>
        </div>
      </div>
    );
  }
}
