// IMPORT: React
import React, { Component } from "react";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Template extends Component {
  // RENDER
  render() {
    // IF: Props key of active is true
    // ELSE: Return nothing
    if (this.props.isActive === true) {
      return (
        <a
          onClick={() => {
            this.props.controller.toggleOverlayer();
            this.props.controller.toggleNavigation();
          }}
          className="overlayer"
        >
          {""}
        </a>
      );
    } else {
      return "";
    }
  }
}
