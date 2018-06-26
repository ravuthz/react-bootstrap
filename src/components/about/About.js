import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

class About extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>About Page</h1>
        <p className="lead">Welcome to ReactJs with BootStrap v4</p>
      </Jumbotron>
    );
  }
}

export default About;
