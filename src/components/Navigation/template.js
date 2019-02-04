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
import HamburgerIcon from "../Hamburger/index";

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
    // DEFINE: Navigation classes
    const navigationClasses = ["navigation"];

    // IF: Navigation is active, push another class
    if (this.props.isActive) {
      navigationClasses.push("active");
    }

    this.handlClick = (ref = false) => {
      this.props.controller.handleNavigationLink(ref);

      if (this.props.isActive) {
        this.props.controller.toggleNavigation();
        this.props.controller.toggleOverlayer();
      }
    };

    return (
      <div className={navigationClasses.join(" ")}>
        <div className="navigation__header">
          <div className="navigation__header__right">
            <Link
              className="navigation__header__right__logo_link"
              to="/"
              onClick={() => {
                this.handlClick("home");
              }}
            >
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
            <a
              className="navigation__header__left__toggle"
              onClick={() => {
                this.props.controller.toggleNavigation();
              }}
            >
              <HamburgerIcon isActive={this.props.isActive} />
            </a>
          </div>
        </div>

        <div className="navigation__menu">
          <ul className="navigation__menu__list">
            <li
              className={
                this.props.activeSection === "home"
                  ? "navigation__menu__list__item active"
                  : "navigation__menu__list__item"
              }
              onClick={() => {
                this.handlClick("home");
              }}
            >
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

            <li
              className={
                this.props.activeSection === "resume"
                  ? "navigation__menu__list__item active"
                  : "navigation__menu__list__item"
              }
              onClick={() => {
                this.handlClick("resume");
              }}
            >
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

            <li
              className={
                this.props.activeSection === "toolset"
                  ? "navigation__menu__list__item active"
                  : "navigation__menu__list__item"
              }
              onClick={() => {
                this.handlClick("toolset");
              }}
            >
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

            <li
              className={
                this.props.activeSection === "projects"
                  ? "navigation__menu__list__item active"
                  : "navigation__menu__list__item"
              }
              onClick={() => {
                this.handlClick("projects");
              }}
            >
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

          <a
            className="navigation__menu__toggle"
            onClick={() => {
              this.props.controller.toggleNavigation();
            }}
          >
            <div className="navigation__menu__toggle__icon_container">
              <HamburgerIcon isActive={this.props.isActive} />
            </div>

            <div className="navigation__menu__toggle__text_container">
              <span className="navigation__menu__toggle__text_container__text">
                Close
              </span>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
