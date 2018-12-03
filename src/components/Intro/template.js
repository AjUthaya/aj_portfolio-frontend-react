// IMPORT: React
import React, { Component } from "react";

// IMPORT: Typing animation
import Typed from "react-typed";

// IMPORT: Social
import Social from "../../components/Social/index";

// IMPORT: Styles
import "./index.scss";

// EXPORT
export default class Template extends Component {
  // RENDER
  render() {
    return (
      <div className="intro">
        <div className="content__wrapper">
          <div className="intro__wrapper">
            <div className="intro__wrapper__text">
              <span className="intro__wrapper__text__name">
                My name is John Doe
              </span>
              <span className="intro__wrapper__text__title">
                <Typed
                  strings={[
                    "I'm a UI/UX Designer",
                    "I'm a Frontend Developer",
                    "I'm a Backend Developer",
                    "I'm a Full-Stack Designer"
                  ]}
                  typeSpeed={50}
                  backSpeed={40}
                  smartBackspace={true}
                  showCursor={true}
                  onComplete={typed => {
                    // 1. DEFINE: Get cursor element by class name
                    const typedCursorElement = document.querySelector(
                      ".typed-cursor"
                    );

                    // 2. CALL: Execute javascript after x milliseconds
                    setTimeout(function() {
                      // A. ELEMENT: Set opacity to null
                      typedCursorElement.style.opacity = 0;
                    }, 2000);
                  }}
                />
              </span>

              <Social />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
