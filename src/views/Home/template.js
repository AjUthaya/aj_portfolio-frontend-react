// IMPORT: React
import React, { Component } from "react";
//import { Helmet } from "react-helmet";

// IMPORT: Navigation
import Navigation from "../../components/Navigation/index";

// IMPORT: Overlayer
import Overlayer from "../../components/Overlayer/index";
import { toggleOverlayer } from "../../components/Overlayer/controller";
// IMPORT: Intro
import Intro from "../../components/Intro/index";
// IMPORT: About Me
import AboutMe from "../../components/AboutMe/index";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Template extends Component {
  constructor() {
    super();
    this.state = {
      overlayer: {
        isActive: false
      },
      navigation: {
        isActive: false
      },
      popup: {
        isActive: false,
        title: false
      }
    };

    // BIND: This to external functions
    this.toggleOverlayer = toggleOverlayer.bind(this);
  }

  // RENDER
  render() {
    return (
      <div className="wrapper">
        <Overlayer
          isActive={this.state.overlayer.isActive}
          toggleOverlayer={this.toggleOverlayer}
        />
        <Navigation isActive={this.state.navigation.isActive} />
        <div className="content">
          <div className="home">
            <Intro />
            <AboutMe />
          </div>
        </div>
      </div>
    );
  }
}
