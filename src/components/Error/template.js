// IMPORT: React
import React, { Component } from "react";

// IMPORT: Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Template extends Component {
  // RENDER
  render() {
    return (
      <div className="error">
        <div className="error__container">
          <div className="error__container__icon">
            <FontAwesomeIcon
              className="error__container__icon__label"
              icon={faTimes}
            />
          </div>

          <div className="error__container__title">
            <span className="error__container__title__label">
              Failed to load data
            </span>
          </div>

          <div className="error__container__meta">{""}</div>

          <div className="error__container__reload">
            <a className="error__container__reload__button">Reload</a>
          </div>
        </div>
      </div>
    );
  }
}
