// IMPORT: React
import React, { Component } from "react";

// IMPORT: Styles
import "./index.scss";

export default class Template extends Component {
  // RENDER
  render() {
    return (
      <div className="projects">
        <div className="projects__filter">Filter for projects</div>

        <div className="projects__list">Project list</div>
      </div>
    );
  }
}
