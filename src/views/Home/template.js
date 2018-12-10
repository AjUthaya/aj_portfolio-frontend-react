// IMPORT: React
import React, { Component } from "react";
//import { Helmet } from "react-helmet";

// IMPORT: Navigation
import Navigation from "../../components/Navigation/index";

// IMPORT: Components
import Overlayer from "../../components/Overlayer/index";
import { toggleOverlayer } from "../../components/Overlayer/controller";
import Intro from "../../components/Intro/index";
import SectionTitle from "../../components/SectionTitle/index";
import Accordion from "../../components/Accordion/index";
import MiniBoxes from "../../components/MiniBoxes/index";
import Projects from "../../components/Projects/index";

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
          controller={toggleOverlayer}
        />
        <Navigation isActive={this.state.navigation.isActive} />
        <div className="content">
          <div className="home">
            <Intro />

            <div className="content__wrapper">
              <SectionTitle title="Resume" />
              <Accordion data={[]} />
            </div>

            <div className="content__wrapper">
              <SectionTitle title="Toolset" />
              <MiniBoxes data={[]} />
            </div>

            <div className="content__wrapper">
              <SectionTitle title="Projects" />
              <Projects />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
