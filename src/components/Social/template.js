// IMPORT: React
import React, { Component } from "react";

// IMPORT: Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen } from "@fortawesome/fontawesome-free-brands";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Template extends Component {
  // RENDER
  render() {
    return (
      <div className="social">
        <div className="social__wrapper">
          <div className="social__wrapper__list">
            <div className="social__wrapper__list__item">
              <a
                className="social__wrapper__list__item__link"
                href="https://github.com/ajanthuthaya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social__wrapper__list__item__link__icon_container">
                  <FontAwesomeIcon
                    className="social__wrapper__list__item__link__icon_container__icon"
                    icon={faGithub}
                  />
                </div>
              </a>
            </div>

            <div className="social__wrapper__list__item">
              <a
                className="social__wrapper__list__item__link"
                href="https://codepen.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social__wrapper__list__item__link__icon_container">
                  <FontAwesomeIcon
                    className="social__wrapper__list__item__link__icon_container__icon"
                    icon={faCodepen}
                  />
                </div>
              </a>
            </div>

            <div className="social__wrapper__list__item">
              <a
                className="social__wrapper__list__item__link"
                href="mailto:ajanth160899@gmail.com?Subject=Question%20related%20to%20portfolio"
              >
                <div className="social__wrapper__list__item__link__icon_container">
                  <FontAwesomeIcon
                    className="social__wrapper__list__item__link__icon_container__icon"
                    icon={faEnvelope}
                  />
                </div>
              </a>
            </div>

            <div className="social__wrapper__list__item">
              <a
                className="social__wrapper__list__item__link"
                href="tel:+4746150178"
              >
                <div className="social__wrapper__list__item__link__icon_container">
                  <FontAwesomeIcon
                    className="social__wrapper__list__item__link__icon_container__icon"
                    icon={faMobile}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
