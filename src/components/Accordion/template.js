// IMPORT: React
import React, { Component } from "react";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Template extends Component {
  // RENDER
  render() {
    return (
      <div className="accordion">
        <div className="accordion__list">
          <div className="accordion__list__item">
            <div className="accordion__list__item__image_container">IMAGE</div>

            <div className="accordion__list__item__title_container">TITLE</div>

            <div className="accordion__list__item__date_container">DATE</div>

            <div className="accordion__list__item__toggle_container">
              TOGGLE
            </div>
          </div>

          <div className="accordion__list__item">
            <div className="accordion__list__item__image_container">IMAGE</div>

            <div className="accordion__list__item__title_container">TITLE</div>

            <div className="accordion__list__item__date_container">DATE</div>

            <div className="accordion__list__item__toggle_container">
              TOGGLE
            </div>
          </div>
        </div>
      </div>
    );
  }
}
