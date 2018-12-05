// IMPORT: React
import React, { Component } from "react";
import { Link } from "react-router-dom";

// IMPORT: Body scroll lock
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

// IMPORT: Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressCard,
  faToolbox,
  faThLarge
} from "@fortawesome/free-solid-svg-icons";

// IMPORT: Animated hamburger icon
import HamburgerIcon from "../hamburger/index";

// IMPORT: SVG Logo
import Logo from "../../assets/images/logo.svg";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Template extends Component {
  componentDidMount() {
    // DEFINE: Get navigation list element
    const navigationMenuElement = document.getElementById("navigation__menu");

    // IF: Navigation element is found
    if (navigationMenuElement) {
      // EVENT LISTENER: When the mouse enters navigation
      navigationMenuElement.addEventListener(
        "mouseenter",
        function(event) {
          // OTHER: Disable parrent scroll
          disableBodyScroll(navigationMenuElement);
        },
        false
      );

      navigationMenuElement.addEventListener(
        "mouseleave",
        function(event) {
          enableBodyScroll(navigationMenuElement);
        },
        false
      );
    }
  }

  // RENDER
  render() {
    return (
      <div className="navigation active">
        <div className="navigation__header">
          <div className="navigation__header__right">
            <Link className="navigation__header__right__logo_link" to="/">
              <div className="navigation__header__right__logo_link__image_container">
                <Logo
                  className="navigation__header__right__logo_link__image_container__image"
                  alt="AJ Logo"
                />
              </div>

              <div className="navigation__header__right__logo_link__text_container">
                <span className="navigation__header__right__logo_link__text_container__text">
                  AJ Portfolio
                </span>
              </div>
            </Link>
          </div>

          <div className="navigation__header__left">
            <div className="navigation__header__left__toggle">
              <HamburgerIcon />
            </div>
          </div>
        </div>

        <div className="navigation__menu">
          <ul className="navigation__menu__list">
            <li className="navigation__menu__list__item active">
              <div className="navigation__menu__list__item__icon_container">
                <FontAwesomeIcon
                  className="navigation__menu__list__item__icon_container__icon"
                  icon={faHome}
                />
              </div>

              <div className="navigation__menu__list__item__text_container">
                <span className="navigation__menu__list__item__text_container__text">
                  Home
                </span>
              </div>
            </li>

            <li className="navigation__menu__list__item">
              <div className="navigation__menu__list__item__icon_container">
                <FontAwesomeIcon
                  className="navigation__menu__list__item__icon_container__icon"
                  icon={faAddressCard}
                />
              </div>

              <div className="navigation__menu__list__item__text_container">
                <span className="navigation__menu__list__item__text_container__text">
                  Resume
                </span>
              </div>
            </li>

            <li className="navigation__menu__list__item">
              <div className="navigation__menu__list__item__icon_container">
                <FontAwesomeIcon
                  className="navigation__menu__list__item__icon_container__icon"
                  icon={faToolbox}
                />
              </div>

              <div className="navigation__menu__list__item__text_container">
                <span className="navigation__menu__list__item__text_container__text">
                  Toolset
                </span>
              </div>
            </li>

            <li className="navigation__menu__list__item">
              <div className="navigation__menu__list__item__icon_container">
                <FontAwesomeIcon
                  className="navigation__menu__list__item__icon_container__icon"
                  icon={faThLarge}
                />
              </div>

              <div className="navigation__menu__list__item__text_container">
                <span className="navigation__menu__list__item__text_container__text">
                  Projects
                </span>
              </div>
            </li>
          </ul>

          <div className="navigation__menu__toggle">
            <div className="navigation__menu__toggle__icon_container">
              <HamburgerIcon active={true} />
            </div>

            <div className="navigation__menu__toggle__text_container">
              <span className="navigation__menu__toggle__text_container__text">
                Close
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
