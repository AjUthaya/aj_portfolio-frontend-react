// IMPORT: React
import React, { Component } from "react";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Template extends Component {
  // RENDER
  render() {
    return (
      <div className="projects">
        <div className="projects__filter">
          <div className="projects__filter__list">
            <div className="projects__filter__list__item active">
              <span className="projects__filter__list__item__title">All</span>
            </div>
            <div className="projects__filter__list__item">
              <span className="projects__filter__list__item__title">
                Design
              </span>
            </div>
            <div className="projects__filter__list__item">
              <span className="projects__filter__list__item__title">
                Frontend
              </span>
            </div>
            <div className="projects__filter__list__item">
              <span className="projects__filter__list__item__title">
                Backend
              </span>
            </div>
          </div>
        </div>

        <div className="projects__list">Project list</div>
      </div>
    );
  }
}
