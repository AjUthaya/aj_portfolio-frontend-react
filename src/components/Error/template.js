// IMPORT: React
import React, { Component } from "react";

// IMPORT: Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Template extends Component {
  /**
   * @author  Aj
   * @version 1.0
   * @since   2019-01-06
   *
   * HANDLE: When a filter button on a project is clicked
   */
  handleReload = () => {
    // 1. DEFINE: Function to handle reload of data
    const reloadFuntion = this.props.onClick;

    // 2. IF: On click is defined in props && is a function
    if (reloadFuntion && reloadFuntion instanceof Function) {
      this.props.onClick();
    }
  };

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
            <a
              className="error__container__reload__button"
              onClick={this.handleReload}
            >
              Reload
            </a>
          </div>
        </div>
      </div>
    );
  }
}
