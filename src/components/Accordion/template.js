// IMPORT: React
import React, { Component } from "react";

// IMPORT: Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// IMPORT: Placeholder image
import Placeholder from "../../assets/images/placeholder.png";
import BjerkeLogo from "../../assets/images/bjerke_vgs.png";
import LevelupLogo from "../../assets/images/levelup.png";

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
            <div className="accordion__list__item__image_container">
              <img
                className="accordion__list__item__image_container__image"
                src={BjerkeLogo}
                alt="Logo"
              />
            </div>

            <div className="accordion__list__item__title_container">
              <span className="accordion__list__item__title_container__title">
                Bjerke High School
              </span>

              <span className="accordion__list__item__title_container__sub_title">
                Media & Communication Student
              </span>
            </div>

            <div className="accordion__list__item__date_container">
              <span className="accordion__list__item__date_container__date">
                Aug 2015 - May 2018
              </span>
            </div>

            <div className="accordion__list__item__toggle_container">
              <FontAwesomeIcon
                className="accordion__list__item__toggle_container__toggle"
                icon={faAngleDown}
              />
            </div>
          </div>

          <div className="accordion__list__item">
            <div className="accordion__list__item__image_container">
              <img
                className="accordion__list__item__image_container__image"
                src={LevelupLogo}
                alt="Logo"
              />
            </div>

            <div className="accordion__list__item__title_container">
              <span className="accordion__list__item__title_container__title">
                Levelup 2.0
              </span>

              <span className="accordion__list__item__title_container__sub_title">
                Fullstack Intern
              </span>
            </div>

            <div className="accordion__list__item__date_container">
              <span className="accordion__list__item__date_container__date">
                May 2018 - Nov 2018
              </span>
            </div>

            <div className="accordion__list__item__toggle_container">
              <FontAwesomeIcon
                className="accordion__list__item__toggle_container__toggle"
                icon={faAngleDown}
              />
            </div>
          </div>

          <div className="accordion__list__item">
            <div className="accordion__list__item__image_container">
              <img
                className="accordion__list__item__image_container__image"
                src={Placeholder}
                alt="Logo"
              />
            </div>

            <div className="accordion__list__item__title_container">
              <span className="accordion__list__item__title_container__title">
                Title
              </span>

              <span className="accordion__list__item__title_container__sub_title">
                Sub Title
              </span>
            </div>

            <div className="accordion__list__item__date_container">
              <span className="accordion__list__item__date_container__date">
                Start Date - End Date
              </span>
            </div>

            <div className="accordion__list__item__toggle_container">
              <FontAwesomeIcon
                className="accordion__list__item__toggle_container__toggle"
                icon={faAngleDown}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
