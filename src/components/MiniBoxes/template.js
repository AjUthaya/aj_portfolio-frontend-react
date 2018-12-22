// IMPORT: React
import React, { Component } from "react";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Template extends Component {
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
        <a className="mini_boxes__list__item" key={inc}>
          <div className="mini_boxes__list__item__image_container">
            <img
              className="mini_boxes__list__item__image_container"
              src={"https://via.placeholder.com/300x300"}
              alt="Skill"
            />
          </div>

          <div className="mini_boxes__list__item__title_container">
            <span className="mini_boxes__list__item__title_container__title">
              Title
            </span>

            <span className="mini_boxes__list__item__title_container__sub_title">
              View projects
            </span>
          </div>
        </a>
      );
    }

    return returnHtml;
  };

  // RENDER
  render() {
    return (
      <div className="mini_boxes">
        <div className="mini_boxes__list">{this.RenderItems()}</div>
      </div>
    );
  }
}
