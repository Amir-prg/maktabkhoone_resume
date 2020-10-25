import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

export default class TitleAndIcons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "rgb(17, 126, 153)",
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor = () => {
    this.setState({
      color:
        this.state.color === "rgb(17, 126, 153)"
          ? "orange"
          : "rgb(17, 126, 153)",
    });
  };

  render() {
    return [
      <div
        className="navigation"
        style={{
          color: this.state.color,
        }}
      >
        <img
          src={data.icon.colorme}
          alt=""
          title="colorme"
          onClick={() => {
            this.changeColor();
          }}
        />
        <div
          className="sections"
          style={{
            color: this.state.color,
          }}
        >
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={250}
            duration={1000}
            delay={0}
            className="About-nav"
            style={{
              color: this.state.color,
            }}
          >
            About
          </Link>

          <Link
            activeClass="active"
            to="Skills"
            spy={true}
            smooth={true}
            offset={1350}
            duration={1000}
            delay={0}
            className="Skill-nav"
            style={{
              color: this.state.color,
            }}
          >
            Skills
          </Link>
          <Element name="about" className="element"></Element>

          <Element name="Skills" className="element"></Element>
        </div>
      </div>,
      <Fullpage
        className="1"
        style={{
          color: this.state.color,
        }}
      >
        <h1
          className="title"
          style={{
            color: this.state.color,
          }}
          // onMouseEnter ={this.changeColor}
          // onMouseLeave ={()=>{
          //   this.changeColor()
          // }}
        >
          {data.title}
        </h1>
        <h3
          className="subtitle"
          style={{
            color: this.state.color,
          }}
        >
          {data.subtitle}
        </h3>
        <div className="link">
          {Object.keys(data.links).map((key) => {
            return (
              <SocialIcon
                className="links"
                url={data.links[key]}
                target="_blank"
              />
            );
          })}
        </div>

        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={250}
          duration={400}
          delay={0}
        >
          <DownIcon icon={data.icon.down} color={this.state.color} />
        </Link>

        <Element name="about" className="element"></Element>
      </Fullpage>,
    ];
  }
}
