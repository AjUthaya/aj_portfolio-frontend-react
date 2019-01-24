// IMPORT: React
import React, { Component } from "react";

// IMPORT: Typing animation
import Typed from "react-typed";
// IMPORT: Particles
import Particles from "react-particles-js";

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
        <Particles
          className="intro__particles"
          params={{
            particles: {
              number: {
                value: 300,
                density: {
                  enable: true,
                  value_area: 1500
                }
              },
              size: {
                value: 2
              },
              line_linked: {
                enable: true,
                opacity: 0.5
              },
              move: {
                direction: "center",
                speed: 0.5
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.5
                }
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                },
                resize: true
              }
            },
            modes: {
              repulse: {
                distance: 400,
                duration: 4
              }
            },
            retina_detect: true
          }}
        />

        <div className="content__wrapper">
          <div className="intro__wrapper">
            <div className="intro__wrapper__text">
              <span className="intro__wrapper__text__name">My name is Aj</span>
              <span className="intro__wrapper__text__title">
                <Typed
                  strings={[
                    "I'm a UI/UX Designer",
                    "I'm a Frontend Developer",
                    "I'm a Backend Developer",
                    "I'm a Full-Stack Designer"
                  ]}
                  typeSpeed={20}
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

              <Social data={[]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
