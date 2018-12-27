// IMPORT: React
import React, { Component } from "react";

// IMPORT: Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

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
    // 1. DEFINE: Resume data
    const resumeObject = this.props.resume,
      resumeData = this.props.resume.data;

    // 2. DEFINE: Array to store HTML elements
    let returnArray = [];

    // 3. IF: Error
    if (resumeObject.error) {
      return <span>Error</span>;
    }

    // 4. IF: Loading
    if (resumeObject.isLoading) {
      return <span>Loading</span>;
    }

    // 5. IF: Data length is 0
    if (resumeData.length <= 0) {
      return <span>No data was found</span>;
    }

    // 6. MAP: Resume data to HTML
    returnArray = resumeData.map(function(resumeItem, key) {
      return (
        <div className="accordion__list__item" key={key}>
          <div className="accordion__list__item__preview">
            <div className="accordion__list__item__preview__image_container">
              <img
                className="accordion__list__item__preview__image_container__image"
                src={resumeItem.acf.image}
                alt="Logo"
              />
            </div>

            <div className="accordion__list__item__preview__title_container">
              <span className="accordion__list__item__preview__title_container__title">
                {resumeItem.title.rendered}
              </span>

              <span className="accordion__list__item__preview__title_container__sub_title">
                {resumeItem.acf.subtitle}
              </span>
            </div>

            <div className="accordion__list__item__preview__date_container">
              <span className="accordion__list__item__preview__date_container__date">
                {resumeItem.acf.start_date} - {resumeItem.acf.end_date}
              </span>
            </div>

            <div className="accordion__list__item__preview__toggle_container">
              <FontAwesomeIcon
                className="accordion__list__item__preview__toggle_container__toggle"
                icon={faAngleDown}
              />
            </div>
          </div>

          <div className="accordion__list__item__content">
            {resumeItem.content.rendered}
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
      <div className="accordion">
        <div className="accordion__list">{this.RenderItems()}</div>
      </div>
    );
  }
}
