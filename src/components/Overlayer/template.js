// IMPORT: React
import React, { Component } from "react";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Overlayer extends Component {
  // RENDER
  render() {
    // IF: Props key of active is true
    // ELSE: Return nothing
    if (this.props.isActive === true) {
      return <div className="overlayer" />;
    } else {
      return "";
    }
  }
}
