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
    resume: state.resume
  };
};

/**
 * @author  Aj
 * @version 1.0
 * @since   2018-11-21
 *
 * FUNCTION: Map actions to view template
 */
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchResume: actions.resume.fetch,
      fetchSkills: actions.skills.fetch,
      fetchProjects: actions.projects.fetch,
      fetchCategories: actions.categories.fetch
    },
    dispatch
  );
};

// CALL: Function to wrap everything together
const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Template);

// EXPORT
export default Home;
