// IMPORT: React
import React, { Component } from "react";
import Select from "react-responsive-select";

// IMPORT: Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// IMPORT: Style for select
import "./select.scss";
// IMPORT: Styles
import "./index.scss";
import Config from "../../local";

export default class Template extends Component {
  constructor() {
    super();
    this.state = {
      filter: {
        types: [],
        tools: [],
        organizations: []
      }
    };
  }

  /**
   * @author  Aj
   * @version 1.0
   * @since   2018-12-23
   *
   * RENDER: Multi select option
   */
  multiSelectOptionMarkup = text => (
    <div>
      <span className="checkbox">
        <svg
          className="checkbox-icon"
          x="0px"
          y="0px"
          width="12px"
          height="12px"
          viewBox="0 0 488.878 488.878"
        >
          <g>
            <polygon points="143.294,340.058 50.837,247.602 0,298.439 122.009,420.447 122.149,420.306 144.423,442.58 488.878,98.123 437.055,46.298 " />
          </g>
        </svg>
      </span>
      <span> {text}</span>
    </div>
  );

  /**
   * @author  Aj
   * @version 1.0
   * @since   2018-12-28
   *
   * RENDER: Map data to HTML
   */
  renderItems = () => {
    // 1. DEFINE: Working variables
    const Object = this.props.projects,
      Data = this.props.projects.data,
      noData = Data.length === 0;

    // 2. DEFINE: Array to store HTML elements
    let returnArray = [];

    // 3. IF: Error
    if (Object.error && noData) {
      return <span>Error</span>;
    }

    // 4. IF: Loading
    if (Object.isLoading && noData) {
      return <span>Loading</span>;
    }

    // 5. IF: Data length is 0
    if (noData) {
      return <span>No data was found</span>;
    }

    // 6. MAP: Data to HTML
    returnArray = Data.map((item, key) => {
      // DEFINE: Working variables
      const categories = item.acf.categories,
        skills = item.acf.skills;

      let company = item.acf.company;

      // HELPER: Render sub data to HTML
      const renderCategories = () => {
        // DEFINE: Return array with HTML items
        const returnItems = [];

        // IF: Data length is 0
        if (categories.length === 0) {
          return returnItems;
        }

        // MAP: Data to HTML
        return categories.map((item, key) => {
          // DEFINE: Return item
          let returnItem = "";

          // IF: First item
          if (key === 0) {
            returnItem = (
              <a
                className="projects__list__item__header__sub_title__label__link"
                key={item.ID}
              >
                {item.post_title}
              </a>
            );
          } else {
            returnItem = [
              ", ",
              <a
                className="projects__list__item__header__sub_title__label__link"
                key={item.ID}
              >
                {item.post_title}
              </a>
            ];
          }

          // @RETURN
          return returnItem;
        });
      };

      // HELPER: Render sub data to HTML
      const renderSkills = () => {
        // DEFINE: Return array with HTML items
        const returnItems = [];

        // IF: Data length is 0
        if (skills.length === 0) {
          // @RETURN
          return returnItems;
        }

        // MAP: Data to HTML
        return skills.map((item, key) => {
          // DEFINE: Return item
          let returnItem = (
            <a
              className="projects__list__item__content__overlayer__tools__item"
              key={item.ID}
            >
              <span className="projects__list__item__content__overlayer__tools__item__label">
                {item.post_title}
              </span>
            </a>
          );

          // @RETURN
          return returnItem;
        });
      };

      const getCompanyLogo = company => {
        const defaultImage = Config.portfolio.projectIcon;
        const noImage = Config.portfolio.noLogo;

        // IF: Company object is eqaul to false
        if (company === false) {
          return defaultImage;
        }

        // DEFINE: Default return image for companies
        let companyLogo = noImage;
        const companyID = company.ID,
          companies = this.props.companies;

        // IF: Company object has a post ID
        if (companyID) {
          // IF: Companies data has length
          if (companies && companies.data.length !== 0) {
            // Loop: Through all companies to find a matching ED value
            for (const data of companies.data) {
              // IF: Data has a key value of ID
              if (data.id) {
                // IF: ID matches companyID
                if (data.id === companyID) {
                  // IF: Company image is not false
                  if (data.acf.image) {
                    companyLogo = data.acf.image;
                  }
                }
              }
            }
          }
        }

        return companyLogo;
      };

      // DEFINE: Default project title
      const defaultTitle = Config.portfolio.projectTitle;

      return (
        <div className="projects__list__item" key={key}>
          <div className="projects__list__item__content">
            {/* ICON */}
            <div className="projects__list__item__content__icon_container">
              <img
                className="projects__list__item__content__icon_container__icon"
                src={getCompanyLogo(company)}
                alt="icon"
              />
            </div>

            {/* BACKGROUND IMAGE */}
            <div className="projects__list__item__content__image_container">
              <img
                className="projects__list__item__content__image_container__image"
                src={item.acf.thumbnail}
                alt="project_image"
              />
            </div>

            {/* HOVER OVERLAYER */}
            <div className="projects__list__item__content__overlayer">
              {/* OVERLAYER TITLE */}
              <div className="projects__list__item__content__overlayer__title">
                <span className="projects__list__item__content__overlayer__title__label">
                  {item.acf.company.post_title || defaultTitle}
                </span>
              </div>

              {/* OVERLAYER TOOLS */}
              <div className="projects__list__item__content__overlayer__tools">
                {renderSkills()}
              </div>
            </div>
          </div>

          <div className="projects__list__item__header">
            <div className="projects__list__item__header__title">
              <span className="projects__list__item__header__title__label">
                {item.title.rendered}
              </span>
            </div>

            <div className="projects__list__item__header__sub_title">
              <span className="projects__list__item__header__sub_title__label">
                {renderCategories()}
              </span>
            </div>
          </div>
        </div>
      );
    });

    // @RETURN
    return returnArray;
  };

  /**
   * @author  Aj
   * @version 1.0
   * @since   2019-01-04
   *
   * RENDER: Filter options
   */

  renderFilters = () => {
    // 1. DEFINE: Working variables
    const Object = this.props.projects,
      Data = this.props.projects.data;

    // 2. IF: Error
    if (Object.error) {
      return;
    }

    // 3. IF: Loading
    if (Object.isLoading) {
      return;
    }

    // 4. IF: Data length is 0
    if (Data.length <= 0) {
      return;
    }

    // DEFINE: Selected values
    //const { types, tools, organizations } = this.state.filter;

    // @RETURN
    return [
      <div className="projects__filter__select" key={1}>
        <Select
          multiselect
          name="make6"
          noSelectionLabel="Select types"
          caretIcon={
            <FontAwesomeIcon className="caret-icon" icon={faAngleDown} />
          }
          onChange={selected => {
            this.handleSelectedValue("type", selected);
          }}
          options={[
            {
              text: "Any",
              value: "null",
              markup: this.multiSelectOptionMarkup("Any")
            },
            {
              text: "Design",
              value: "Design",
              markup: this.multiSelectOptionMarkup("Design")
            },
            {
              text: "Frontend",
              value: "Frontend",
              markup: this.multiSelectOptionMarkup("Frontend")
            },
            {
              text: "Backend",
              value: "Backend",
              markup: this.multiSelectOptionMarkup("Backend")
            },
            {
              text: "Dev Ops",
              value: "DevOps",
              markup: this.multiSelectOptionMarkup("Dev Ops")
            }
          ]}
        />
      </div>,
      <div className="projects__filter__select" key={2}>
        <Select
          multiselect
          name="make6"
          noSelectionLabel="Select tools"
          caretIcon={
            <FontAwesomeIcon className="caret-icon" icon={faAngleDown} />
          }
          onChange={selected => {
            this.handleSelectedValue("tools", selected);
          }}
          options={[
            {
              text: "Any",
              value: "null",
              markup: this.multiSelectOptionMarkup("Any")
            }
          ]}
        />
      </div>,
      <div className="projects__filter__select" key={3}>
        <Select
          multiselect
          name="make6"
          noSelectionLabel="Select organizations"
          caretIcon={
            <FontAwesomeIcon className="caret-icon" icon={faAngleDown} />
          }
          onChange={selected => {
            this.handleSelectedValue("organization", selected);
          }}
          options={[
            {
              text: "Any",
              value: "null",
              markup: this.multiSelectOptionMarkup("Any")
            }
          ]}
        />
      </div>,
      <a className="projects__filter__clear" key={4}>
        <label className="projects__filter__clear__label">
          <FontAwesomeIcon
            className="caret-projects__filter__clear__label__icon"
            icon={faTrashAlt}
          />
          <span className="projects__filter__clear__label__title">Clear</span>
        </label>
      </a>
    ];
  };

  // RENDER
  render() {
    this.handleSelectedValue = (type = false, selected = false) => {
      // IF: Function param values are not empty
      if (type && selected) {
        //console.log(type);
      }
    };

    return (
      <div className="projects">
        <div className="projects__filter">{this.renderFilters()}</div>

        <div className="projects__list">{this.renderItems()}</div>
      </div>
    );
  }
}
