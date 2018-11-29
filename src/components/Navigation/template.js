// IMPORT: React
import React, { Component } from "react";
import { Link } from "react-router-dom";

// IMPORT: Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// IMPORT: SVG Logo
import Logo from "../../assets/images/logo.svg";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Navigation extends Component {
  // RENDER
  render() {
    return (
      <div className="navigation">
        <div className="navigation__left">
          <a className="offcanvas__toggle">
            <FontAwesomeIcon icon={faBars} />
          </a>

          <Link to="/" className="navigation__logo-container">
            <Logo className="navigation__logo" />
            <span className="navigation__logo-label">React Template</span>
          </Link>
        </div>

        <div className="navigation__right">
          <div className="user-menu__toggle">
            <div className="user-menu__image-container">
              <img src="/placeholder.png" alt="user_profile" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
