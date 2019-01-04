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
    // 1. DEFINE: Working variables
    const Object = this.props.skills,
      Data = this.props.skills.data;

    // 2. DEFINE: Array to store HTML elements
    let returnArray = [];

    // 3. IF: Error
    if (Object.error) {
      return <span>Error</span>;
    }

    // 4. IF: Loading
    if (Object.isLoading) {
      return <span>Loading</span>;
    }

    // 5. IF: Data length is 0
    if (Data.length <= 0) {
      return <span>No data was found</span>;
    }

    // 6. MAP: Data to HTML
    returnArray = Data.map(function(item, key) {
      return (
        <div className="mini_boxes__list__item" key={key}>
          <div className="mini_boxes__list__item__image_container">
            <img
              className="mini_boxes__list__item__image_container"
              src={item.acf.image}
              alt="Skill"
            />
          </div>

          <div className="mini_boxes__list__item__title_container">
            <span className="mini_boxes__list__item__title_container__title">
              {item.title.rendered}
            </span>
            {/*
            <span className="mini_boxes__list__item__title_container__sub_title">
              View projects
            </span>
          */}
          </div>
        </div>
      );
    });

    // @RETURN
    return returnArray;
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
