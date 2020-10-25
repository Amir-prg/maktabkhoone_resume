import React, { Component } from "react";
import "./fullpage.css";
import Snowfall from "react-snowfall";

export default class Fullpage extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={`fullpage${this.props.className} || '' `} color="red">
        {children}
        <Snowfall color="rgb(17, 126, 153)" snowflakeCount={120} />
      </div>
    );
  }
}
