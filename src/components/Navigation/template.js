// IMPORT: React
import React, { Component } from "react";
import { Link } from "react-router-dom";

// IMPORT: Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressCard,
  faToolbox,
  faThLarge
} from "@fortawesome/free-solid-svg-icons";

// IMPORT: SVG Logo
import Logo from "../../assets/images/logo.svg";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Navigation extends Component {
  // RENDER
  render() {
    return (
      <div className="navigation active">
        <div className="navigation__logo">
          <Link className="navigation__logo__link" to="/">
            <Logo className="navigation__logo__link__image" alt="AJ Logo" />
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

            <li className="navigation__menu__list__item">
              <a className="navigation__menu__list__item__link">
                <FontAwesomeIcon
                  className="navigation__menu__list__item__link__icon"
                  icon={faToolbox}
                />
              </a>
            </li>

            <li className="navigation__menu__list__item">
              <a className="navigation__menu__list__item__link">
                <FontAwesomeIcon
                  className="navigation__menu__list__item__link__icon"
                  icon={faThLarge}
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="navigation__toggle">
          <a className="navigation__toggle__link">
            <div className="navigation__toggle__link__hamburger">
              <span className="navigation__toggle__link__hamburger__top" />
              <span className="navigation__toggle__link__hamburger__bottom" />
            </div>
          </a>
        </div>
      </div>
    );
  }
}
