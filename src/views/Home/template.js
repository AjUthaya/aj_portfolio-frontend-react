// IMPORT: React
import React, { Component } from "react";
//import { Helmet } from "react-helmet";

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
          <div className="home">Home</div>
        </div>
      </div>
    );
  }
}
