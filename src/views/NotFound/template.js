// IMPORT: React
import React, { Component } from "react";

// IMPORT: Components
import Navigation from "../../components/Navigation/index";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Template extends Component {
  // RENDER
  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <div className="content">
          <div className="not-found">Not found</div>
        </div>
      </div>
    );
  }
}
