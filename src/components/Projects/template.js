// IMPORT: React
import React, { Component } from "react";
import Select from "react-responsive-select";

// IMPORT: Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// IMPORT: Style for select
import "./select.scss";
// IMPORT: Styles
import "./index.scss";

export default class Template extends Component {
  multiSelectOptionMarkup = text => (
    <div>
      <span className="checkbox">
        <svg
          className="checkbox-icon"
          x="0px"
          y="0px"
          width="12px"
          height="12px"
          viewBox="0 0 488.878 488.878"
        >
          <g>
            <polygon points="143.294,340.058 50.837,247.602 0,298.439 122.009,420.447 122.149,420.306 144.423,442.58 488.878,98.123 437.055,46.298 " />
          </g>
        </svg>
      </span>
      <span> {text}</span>
    </div>
  );

  // RENDER
  render() {
    return (
      <div className="projects">
        <div className="projects__filter">
          <div className="projects__filter__select">
            <Select
              multiselect
              name="make6"
              noSelectionLabel="Select types"
              caretIcon={
                <FontAwesomeIcon className="caret-icon" icon={faAngleDown} />
              }
              onChange={newValue => {
                console.log(newValue);
              }}
              options={[
                {
                  text: "Any",
                  value: "null",
                  markup: this.multiSelectOptionMarkup("Any")
                },
                {
                  text: "Design",
                  value: "Design",
                  markup: this.multiSelectOptionMarkup("Design")
                },
                {
                  text: "Frontend",
                  value: "Frontend",
                  markup: this.multiSelectOptionMarkup("Frontend")
                },
                {
                  text: "Backend",
                  value: "Backend",
                  markup: this.multiSelectOptionMarkup("Backend")
                },
                {
                  text: "Dev Ops",
                  value: "DevOps",
                  markup: this.multiSelectOptionMarkup("Dev Ops")
                }
              ]}
            />
          </div>

          <div className="projects__filter__select">
            <Select
              multiselect
              name="make6"
              noSelectionLabel="Select tools"
              caretIcon={
                <FontAwesomeIcon className="caret-icon" icon={faAngleDown} />
              }
              onChange={newValue => {
                console.log(newValue);
              }}
              options={[
                {
                  text: "Any",
                  value: "null",
                  markup: this.multiSelectOptionMarkup("Any")
                }
              ]}
            />
          </div>

          <div className="projects__filter__select">
            <Select
              multiselect
              name="make6"
              noSelectionLabel="Select organization"
              caretIcon={
                <FontAwesomeIcon className="caret-icon" icon={faAngleDown} />
              }
              onChange={newValue => {
                console.log(newValue);
              }}
              options={[
                {
                  text: "Any",
                  value: "null",
                  markup: this.multiSelectOptionMarkup("Any")
                }
              ]}
            />
          </div>

          <a className="projects__filter__clear">
            <label className="projects__filter__clear__label">
              <FontAwesomeIcon
                className="caret-projects__filter__clear__label__icon"
                icon={faTrashAlt}
              />
              <span className="projects__filter__clear__label__title">
                Clear
              </span>
            </label>
          </a>
        </div>

        <div className="projects__list">Project list</div>
      </div>
    );
  }
}
