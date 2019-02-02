// IMPORT: React
import React, { Component } from "react";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Template extends Component {
  // RENDER
  render() {
    // 1. DEFINE: Classes for main container
    const classes = ["hamburger"];

    // 2. IF: Prop of active is true
    if (this.props.isActive === true) {
      // A. PUSH: Value of active into classes for main container
      classes.push("active");
    }

    // RETURN
    return (
      <div className={classes.join(" ")}>
        <span className="hamburger__top" />

        <span className="hamburger__bottom" />
      </div>
    );
  }
}
