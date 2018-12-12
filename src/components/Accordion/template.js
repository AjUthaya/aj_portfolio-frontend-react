// IMPORT: React
import React, { Component } from "react";

// IMPORT: Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// IMPORT: Placeholder image
import BjerkeLogo from "../../assets/images/bjerke_vgs.png";

// IMPORT: Styles
import "./index.scss";

export default class Template extends Component {
  /**
   * @author  Aj
   * @version 1.0
   * @since   2018-12-12
   *
   * RENDER: Map data to HTML
   */
  RenderItems = () => {
    // 1. DEFINE: Array to store HTML items
    const returnHtml = [];

    // 2. LOOP: Through the data array
    for (let inc = 0; inc < 5; inc++) {
      // A. PUSH: HTML item into array outside of loop
      returnHtml.push(
        <div className="accordion__list__item" key={inc}>
          <div className="accordion__list__item__preview">
            <div className="accordion__list__item__preview__image_container">
              <img
                className="accordion__list__item__preview__image_container__image"
                src={BjerkeLogo}
                alt="Logo"
              />
            </div>

            <div className="accordion__list__item__preview__title_container">
              <span className="accordion__list__item__preview__title_container__title">
                Bjerke High School
              </span>

              <span className="accordion__list__item__preview__title_container__sub_title">
                Media & Communication Student
              </span>
            </div>

            <div className="accordion__list__item__preview__date_container">
              <span className="accordion__list__item__preview__date_container__date">
                Aug 2015 - May 2018
              </span>
            </div>

            <div className="accordion__list__item__preview__toggle_container">
              <FontAwesomeIcon
                className="accordion__list__item__preview__toggle_container__toggle"
                icon={faAngleDown}
              />
            </div>
          </div>

          <div className="accordion__list__item__content">Description</div>
        </div>
      );
    }

    // @RETURN
    return returnHtml;
  };

  // RENDER
  render() {
    return (
      <div className="accordion">
        <div className="accordion__list">{this.RenderItems()}</div>
      </div>
    );
  }
}
