import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import Menu from "../menu/Menu";

class Layout extends Component {
  render() {
    return (
      <Container>
        <Menu />
        {this.props.children}
        <footer>
          <p>
            Copyright &copy; 2018 <Link to="/">ReactJS BootStrap</Link>
          </p>
        </footer>
      </Container>
    );
  }
}

export default Layout;
