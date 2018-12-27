// IMPORT: React
import React, { Component } from "react";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Template extends Component {
  // RENDER
  render() {
    // 1. DEFINE: Classes for main container
    const classes = ["loading_triangle"];

    // RETURN
    return (
      <div className={classes.join(" ")}>
        <span className="loading_triangle__test">Loading Triangle</span>
      </div>
    );
  }
}
