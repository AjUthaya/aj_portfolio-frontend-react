// IMPORT: React
import React, { Component } from "react";
import { Link } from "react-router-dom";

// IMPORT: Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAddressCard } from "@fortawesome/free-solid-svg-icons";

// IMPORT: SVG Logo
import Logo from "../../assets/images/logo.png";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Navigation extends Component {
  // RENDER
  render() {
    return (
      <div className="navigation">
        <div className="navigation__logo">
          <Link className="navigation__logo__link" to="/">
            <img
              className="navigation__logo__link__image"
              src={Logo}
              alt="AJ Logo"
            />
          </Link>
        </div>

        <div className="navigation__menu">
          <ul className="navigation__menu__list">
            <li className="navigation__menu__list__item">
              <a className="navigation__menu__list__item__link active">
                <FontAwesomeIcon
                  className="navigation__menu__list__item__link__icon"
                  icon={faHome}
                />
              </a>
            </li>

            <li className="navigation__menu__list__item">
              <a className="navigation__menu__list__item__link">
                <FontAwesomeIcon
                  className="navigation__menu__list__item__link__icon"
                  icon={faAddressCard}
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="navigation__toggle">
          <a>x</a>
        </div>
      </div>
    );
  }
}
