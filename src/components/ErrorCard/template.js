// IMPORT: React
import React, { Component } from "react";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Template extends Component {
  // RENDER
  render() {
    // 1. DEFINE: Classes for main container
    const classes = ["error_card"];

    // RETURN
    return (
      <div className={classes.join(" ")}>
        <span className="error_card__test">Error Card</span>
      </div>
    );
  }
}
