import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

export default class AboutSection extends Component {
  
  render() {
    return [
      <Fullpage className="2">
        <h2 className="about-title" >{data.sections[0].title}</h2>
        <h4 className="about-paragraph" >
          <i>
            {" "}
              Hi, My name is Seyed Amir Heshmati and i'm 20 years old . I live in
            Tehran and i'm studing computer engineering . I love programming and
            web developing ,specially the programmin in back-end part and i want
            to progress in these feilds. also i like team working because it helps
            me to improve myself in different aspect such as
            education,knowledge,social relationship and so on.
            <br />
            Thank you for visiting my website!"
          </i>
        </h4>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={250}
          duration={400}
          delay={0}
        >
          <DownIcon icon={data.icon.down} />
        </Link>

        <Element name="skills" className="element"></Element>
      </Fullpage>
    ];
  }
}
