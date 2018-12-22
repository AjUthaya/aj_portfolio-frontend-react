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

  /**
   * @author  Aj
   * @version 1.0
   * @since   2018-12-12
   *
   * RENDER: Map data to HTML
   */
  RenderItems = () => {
    const returnHtml = [];

    for (let inc = 0; inc < 20; inc++) {
      returnHtml.push(
        <div className="projects__list__item" key={inc}>
          <div className="projects__list__item__content">
            {/* ICON */}
            <div className="projects__list__item__content__icon_container">
              <img
                className="projects__list__item__content__icon_container__icon"
                src={
                  "https://www.energysys.com/wp-content/uploads/2012/03/Energysys_avatar-logo-transparent-bg.png"
                }
                alt="icon"
              />
            </div>

            {/* BACKGROUND IMAGE */}
            <div className="projects__list__item__content__image_container">
              <img
                className="projects__list__item__content__image_container__image"
                src={
                  "https://cdn.freshdesignweb.com/wp-content/uploads/site/Boxify-Free-One-Page-Website-Template.jpg"
                }
                alt="project_image"
              />
            </div>

            {/* HOVER OVERLAYER */}
            <div className="projects__list__item__content__overlayer">
              {/* OVERLAYER TITLE */}
              <div className="projects__list__item__content__overlayer__title">
                <span className="projects__list__item__content__overlayer__title__label">
                  Personal
                </span>
              </div>

              {/* OVERLAYER TOOLS */}
              <div className="projects__list__item__content__overlayer__tools">
                <a className="projects__list__item__content__overlayer__tools__item">
                  <span className="projects__list__item__content__overlayer__tools__item__label">
                    ReactJS
                  </span>
                </a>

                <a className="projects__list__item__content__overlayer__tools__item">
                  <span className="projects__list__item__content__overlayer__tools__item__label">
                    ReactJS
                  </span>
                </a>

                <a className="projects__list__item__content__overlayer__tools__item">
                  <span className="projects__list__item__content__overlayer__tools__item__label">
                    ReactJS
                  </span>
                </a>

                <a className="projects__list__item__content__overlayer__tools__item">
                  <span className="projects__list__item__content__overlayer__tools__item__label">
                    ReactJS
                  </span>
                </a>

                <a className="projects__list__item__content__overlayer__tools__item">
                  <span className="projects__list__item__content__overlayer__tools__item__label">
                    ReactJS
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="projects__list__item__header">
            <div className="projects__list__item__header__title">
              <span className="projects__list__item__header__title__label">
                Title
              </span>
            </div>

            <div className="projects__list__item__header__sub_title">
              <span className="projects__list__item__header__sub_title__label">
                <a className="projects__list__item__header__sub_title__label__link">
                  Design
                </a>
                {", "}
                <a className="projects__list__item__header__sub_title__label__link">
                  Frontend
                </a>
                {", "}
                <a className="projects__list__item__header__sub_title__label__link">
                  Backend
                </a>
                {", "}
                <a className="projects__list__item__header__sub_title__label__link">
                  QA
                </a>
              </span>
            </div>
          </div>
        </div>
      );
    }

    return returnHtml;
  };

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
                //console.log(newValue);
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
                //console.log(newValue);
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
              noSelectionLabel="Select organizations"
              caretIcon={
                <FontAwesomeIcon className="caret-icon" icon={faAngleDown} />
              }
              onChange={newValue => {
                //console.log(newValue);
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

        <div className="projects__list">{this.RenderItems()}</div>
      </div>
    );
  }
}
