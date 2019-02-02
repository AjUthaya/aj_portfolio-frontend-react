// IMPORT: React
import React, { Component } from "react";
//import { Helmet } from "react-helmet";
import Waypoint from "react-waypoint";
import Fade from "react-reveal/Fade";

// IMPORT: Navigation
import Navigation from "../../components/Navigation/index";
import {
  toggleNavigation,
  handleNavigationLink
} from "../../components/Navigation/controller";

// IMPORT: Overlayer
import Overlayer from "../../components/Overlayer/index";
import { toggleOverlayer } from "../../components/Overlayer/controller";

// IMPORT: Components
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
        isActive: false,
        activeSection: "projects"
      },
      waypoint: {
        resume: false,
        toolset: false,
        projects: false
      }
    };

    // BIND
    this.toggleOverlayer = toggleOverlayer.bind(this);
    this.toggleNavigation = toggleNavigation.bind(this);
    this.handleNavigationLink = handleNavigationLink.bind(this);
  }

  componentDidMount() {
    // FETCH: Resume data
    this.props.fetchResume();
    this.props.fetchSkills();
    this.props.fetchProjects();
    this.props.fetchCategories();
  }

  // RENDER
  render() {
    /**
     * @author  Aj
     * @version 1.0
     * @since   2018-12-22
     *
     * HANDLER: Handle waypoint switching
     */
    this.handleWaypoint = (section = "home") => {
      this.setState({
        navigation: {
          ...this.state.navigation,
          activeSection: section
        }
      });
    };

    return (
      <div className="wrapper">
        <Overlayer
          isActive={this.state.overlayer.isActive}
          controller={{
            toggleOverlayer: this.toggleOverlayer,
            toggleNavigation: this.toggleNavigation
          }}
        />
        <Navigation
          isActive={this.state.navigation.isActive}
          activeSection={this.state.navigation.activeSection}
          controller={{
            toggleOverlayer: this.toggleOverlayer,
            toggleNavigation: this.toggleNavigation,
            handleNavigationLink: this.handleNavigationLink
          }}
        />

        <div className="content">
          <div className="home">
            {/* HOME */}
            <Waypoint
              onEnter={() => {
                this.handleWaypoint("home");
              }}
            >
              <div id="home">
                <Intro ref={this.refHome} />
              </div>
            </Waypoint>

            {/* RESUME */}
            <Waypoint
              onEnter={() => {
                this.handleWaypoint("resume");
              }}
            >
              <div className="content__wrapper" id="resume">
                <Fade right>
                  <SectionTitle title="Resume" />
                  <Accordion />
                </Fade>
              </div>
            </Waypoint>

            {/* TOOLSET */}
            <Waypoint
              onEnter={() => {
                this.handleWaypoint("toolset");
              }}
            >
              <div className="content__wrapper" id="toolset">
                <Fade right>
                  <SectionTitle title="Toolset" />
                  <MiniBoxes />
                </Fade>
              </div>
            </Waypoint>

            {/* PROJECTS */}
            <Waypoint
              onEnter={() => {
                this.handleWaypoint("projects");
              }}
            >
              <div className="content__wrapper" id="projects">
                <Fade right>
                  <SectionTitle title="Projects" />
                  <Projects />
                </Fade>
              </div>
            </Waypoint>
          </div>
        </div>
      </div>
    );
  }
}
