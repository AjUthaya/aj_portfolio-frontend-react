// IMPORT: Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// IMPORT: Template view file
import Template from "./template";

// IMPORT: Actions
import actions from "../../actions/index";

/**
 * @author  Aj
 * @version 1.0
 * @since   2018-11-21
 *
 * FUNCTION: Map data to view template
 */
const mapStateToProps = state => {
  return {
    projects: state.projects,
    companies: state.resume,
    tools: state.skills,
    types: state.categories
  };
};

/**
 * @author  Aj
 * @version 1.0
 * @since   2019-02-02
 *
 * FUNCTION: Map actions to view template
 */
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchProjects: actions.projects.fetch
    },
    dispatch
  );
};

// CALL: Function to wrap everything together
const Projects = connect(
  mapStateToProps,
  mapDispatchToProps
)(Template);

// EXPORT
export default Projects;
