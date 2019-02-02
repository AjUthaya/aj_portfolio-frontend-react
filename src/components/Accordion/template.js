// IMPORT: React
import React, { Component } from "react";

// IMPORT: Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// IMPORT: Loading & Error
import Loading from "../Loading/index";
import Error from "../Error/index";

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
    // 1. DEFINE: Working variables
    const Object = this.props.resume,
      Data = this.props.resume.data,
      noData = Data.length === 0;

    // 2. DEFINE: Array to store HTML elements
    let returnArray = [];

    // 3. IF: Loading
    if (Object.isLoading && noData) {
      return <Loading />;
    }

    // 4. IF: Data length is 0
    if (noData && !Object.error) {
      return <span className="accordion__list__no_data">NO RECORDS FOUND</span>;
    }

    // 5. IF: Error
    if (Object.error && noData) {
      return <Error onClick={this.props.fetchResume} />;
    }

    // 6. MAP: Data to HTML
    returnArray = Data.map(function(item, key) {
      return (
        <div className="accordion__list__item" key={key}>
          <div className="accordion__list__item__preview">
            <div className="accordion__list__item__preview__image_container">
              <img
                className="accordion__list__item__preview__image_container__image"
                src={item.acf.image.sizes.company_icon}
                alt="Logo"
              />
            </div>

            <div className="accordion__list__item__preview__title_container">
              <span className="accordion__list__item__preview__title_container__title">
                {item.title.rendered}
              </span>

              <span className="accordion__list__item__preview__title_container__sub_title">
                {item.acf.subtitle}
              </span>
            </div>

            <div className="accordion__list__item__preview__date_container">
              <span className="accordion__list__item__preview__date_container__date">
                {item.acf.start_date} - {item.acf.end_date}
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
            {item.content.rendered}
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
