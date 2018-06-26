import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/contact"
              render={() => (
                <Jumbotron>
                  <h1>Contact Page</h1>
                  <p className="lead">Welcome to ReactJs with BootStrap v4</p>
                </Jumbotron>
              )}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
