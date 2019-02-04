// IMPORT: React
import React, { Component } from "react";
import Select from "react-responsive-select";
import Shuffle from "react-flip-move";

// IMPORT: Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// IMPORT: Styles
import "./select.scss";
import "./index.scss";

// IMPORT: Loading & Error
import Loading from "../Loading/index";
import Error from "../Error/index";

// IMPORT: Config
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
   * @since   2019-01-06
   *
   * DATA: Filter projects
   */
  filterProjects = projects => {
    // DEFINE: Basic variables
    const filteredProjects = [];

    // LOOP: Projects
    for (const project of projects) {
      // DEFINE: Basic variables
      const types = project.acf.categories || [],
        tools = project.acf.skills || [],
        exstraTools = project.acf.invisible_skills || [],
        organizations = project.acf.company || false,
        filterTypes = this.state.filter.types,
        filterTools = this.state.filter.tools,
        filterOrganizations = this.state.filter.organizations,
        filtersEmpty =
          filterTypes.length === 0 &&
          filterTools.length === 0 &&
          filterOrganizations.length === 0;
      let passedFilter = false;

      // LOOP: Types
      for (const type of types) {
        const title = type.post_title;

        if (
          filtersEmpty ||
          filterTypes.indexOf("Any") !== -1 ||
          filterTypes.indexOf(title) !== -1
        ) {
          passedFilter = true;
        }
      }

      // LOOP: Tools
      for (const tool of tools.concat(exstraTools)) {
        const title = tool.post_title;

        if (
          filtersEmpty ||
          filterTools.indexOf("Any") !== -1 ||
          filterTools.indexOf(title) !== -1
        ) {
          passedFilter = true;
        }
      }

      // IF: Company in filter array
      if (
        filtersEmpty ||
        filterOrganizations.indexOf("Any") !== -1 ||
        filterOrganizations.indexOf(organizations.post_title) !== -1 ||
        (filterOrganizations.indexOf("Personal") !== -1 && !organizations)
      ) {
        //console.log(organizations);

        passedFilter = true;
      }

      if (passedFilter) {
        filteredProjects.push(project);
      }
    }

    // RETURN
    return filteredProjects;
  };

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

    // 3. IF: Loading
    if (Object.isLoading && noData) {
      return <Loading />;
    }

    // 4. IF: Data length is 0
    if (noData && !Object.error) {
      return <span className="projects__list__no_data">NO RECORDS FOUND</span>;
    }

    // 5. IF: Error
    if (Object.error && noData) {
      return <Error onClick={this.props.fetchProjects} />;
    }

    // 6. DATA: Filter data
    const filteredData = this.filterProjects(Data);

    // 7. IF: No data after filtering
    if (filteredData.length === 0) {
      return (
        <span className="projects__list__no_data">
          No matching projects found
        </span>
      );
    }

    // 8. MAP: Data to HTML
    returnArray = filteredData.map((item, key) => {
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
                onClick={() => {
                  this.handleProjectRefs("type", item.post_title);
                }}
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
                onClick={() => {
                  this.handleProjectRefs("type", item.post_title);
                }}
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
              onClick={() => {
                this.handleProjectRefs("tool", item.post_title);
              }}
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
                    companyLogo = data.acf.image.sizes.project_preview;
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
                src={item.acf.thumbnail.sizes.project_preview}
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
   * @since   2019-01-06
   *
   * HANDLE: On selected filter value
   */
  handleSelectedValue = (type = false, selected = false) => {
    // IF: Function param values are not empty
    if (type && selected) {
      // DEFINE: Filter state
      const filter = { ...this.state.filter };

      // DEFINE: Return array
      const selectedItems = [];

      // LOOP: Through all items in array
      for (const option of selected.options) {
        if (option.value && option.value !== "null") {
          selectedItems.push(option.value);
        }
      }

      // SWITCH: Check what filter that was updated
      switch (type) {
        case "type": {
          // IF: State data is diffrent from state
          if (selectedItems.join("_") !== this.state.filter.types.join("_")) {
            filter.types = selectedItems;
            this.setState({ filter });
          }
          break;
        }
        case "tool": {
          // IF: State data is diffrent from state
          if (selectedItems.join("_") !== this.state.filter.tools.join("_")) {
            filter.tools = selectedItems;
            this.setState({ filter });
          }
          break;
        }
        case "organization": {
          // IF: State data is diffrent from state
          if (
            selectedItems.join("_") !==
            this.state.filter.organizations.join("_")
          ) {
            filter.organizations = selectedItems;
            this.setState({ filter });
          }
          break;
        }
        default: {
        }
      }
    }
  };

  /**
   * @author  Aj
   * @version 1.0
   * @since   2019-01-05
   *
   * HANDLE: On click of clear filter
   */
  handleClearFilter = () => {
    // DEFINE: Filter state
    const filter = { ...this.state.filter };

    // REDEFINE: Clear out all options
    filter.types = [];
    filter.tools = [];
    filter.organizations = [];

    // STATE: Update filter
    this.setState({ filter });
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
    const projects = this.props.projects,
      types = this.props.types.data,
      tools = this.props.tools.data,
      organizations = this.props.companies.data,
      Data = this.props.projects.data,
      noData = Data.length === 0;

    // 2. IF: Error
    if (projects.error && noData) {
      return;
    }

    // 3. IF: Loading
    if (projects.isLoading && noData) {
      return;
    }

    // 4. DEFINE: Default options
    const typeOptions = [
        {
          text: "Any",
          value: "Any",
          markup: this.multiSelectOptionMarkup("Any")
        }
      ],
      toolOptions = [
        {
          text: "Any",
          value: "Any",
          markup: this.multiSelectOptionMarkup("Any")
        }
      ],
      organizationOptions = [
        {
          text: "Any",
          value: "Any",
          markup: this.multiSelectOptionMarkup("Any")
        },
        {
          text: "Personal",
          value: "Personal",
          markup: this.multiSelectOptionMarkup("Personal")
        }
      ];

    // 5. IF: Type data has length
    if (types.length !== 0) {
      // A. LOOP: Through all the data
      for (const type of types) {
        // I. DEFINE: Working values
        const title = type.title.rendered;

        // IF: Title is not invalid
        if (title) {
          typeOptions.push({
            text: title,
            value: title,
            markup: this.multiSelectOptionMarkup(title)
          });
        }
      }
    }

    // 6. IF: Organizations data has length
    if (organizations.length !== 0) {
      // A. LOOP: Through all the data
      for (const organization of organizations) {
        // I. DEFINE: Working values
        const title = organization.title.rendered;

        // IF: Title is not invalid
        if (title) {
          organizationOptions.push({
            text: title,
            value: title,
            markup: this.multiSelectOptionMarkup(title)
          });
        }
      }
    }

    // 7. IF: Tools data has length
    if (tools.length !== 0) {
      // A. LOOP: Through all the data
      for (const tool of tools) {
        // I. DEFINE: Working values
        const title = tool.title.rendered;

        // IF: Title is not invalid
        if (title) {
          toolOptions.push({
            text: title,
            value: title,
            markup: this.multiSelectOptionMarkup(title)
          });
        }
      }
    }

    const caretIcon = (
      <FontAwesomeIcon className="caret-icon" icon={faAngleDown} />
    );

    // @RETURN
    return [
      <div className="projects__filter__select" key={1}>
        <Select
          altered={[].join("_") !== this.state.filter.types.join("_")}
          caretIcon={caretIcon}
          multiselect
          name="make6"
          noSelectionLabel="Select types"
          onChange={selected => {
            this.handleSelectedValue("type", selected);
          }}
          options={typeOptions}
          selectedValues={this.state.filter.types}
        />
      </div>,
      <div className="projects__filter__select" key={2}>
        <Select
          altered={[].join("_") !== this.state.filter.tools.join("_")}
          caretIcon={caretIcon}
          multiselect
          name="make5"
          noSelectionLabel="Select tools"
          onChange={selected => {
            this.handleSelectedValue("tool", selected);
          }}
          options={toolOptions}
          selectedValues={this.state.filter.tools}
        />
      </div>,
      <div className="projects__filter__select" key={3}>
        <Select
          altered={[].join("_") !== this.state.filter.organizations.join("_")}
          multiselect
          name="make4"
          noSelectionLabel="Select organizations"
          caretIcon={caretIcon}
          onChange={selected => {
            this.handleSelectedValue("organization", selected);
          }}
          options={organizationOptions}
          selectedValues={this.state.filter.organizations}
        />
      </div>,
      <a
        className="projects__filter__clear"
        onClick={this.handleClearFilter}
        key={4}
      >
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

  /**
   * @author  Aj
   * @version 1.0
   * @since   2019-01-06
   *
   * HANDLE: When a filter button on a project is clicked
   */
  handleProjectRefs = (type = false, value = false) => {
    // IF: Params are not empty
    if (type && value) {
      // DEFINE: Basic variables
      const filter = { ...this.state.filter };

      // SWITCH: Check type
      switch (type) {
        case "type": {
          // REDEFINE: Empty out the other filters
          filter.tools = [];
          filter.organizations = [];

          // REDEFINE: Set value in filter array
          filter.types = [value];

          // STATE: Update filter
          this.setState({ filter });
          break;
        }
        case "tool": {
          // REDEFINE: Empty out the other filters
          filter.types = [];
          filter.organizations = [];

          // REDEFINE: Set value in filter array
          filter.tools = [value];

          // STATE: Update filter
          this.setState({ filter });
          break;
        }
        default: {
        }
      }
    }
  };

  // RENDER
  render() {
    return (
      <div className="projects">
        <div className="projects__filter">{this.renderFilters()}</div>

        <Shuffle className="projects__list">{this.renderItems()}</Shuffle>
      </div>
    );
  }
}
