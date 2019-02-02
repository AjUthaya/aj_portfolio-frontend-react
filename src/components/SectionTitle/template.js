// IMPORT: React
import React, { Component } from "react";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Template extends Component {
  // RENDER
  render() {
    return (
      <div className="section_title">
        <span className="section_title__title">{this.props.title || ""}</span>
        <span className="section_title__underline" />
      </div>
    );
  }
}
